const { authenticate } = require("@feathersjs/authentication").hooks;

const { discard, iff, isProvider, populate } = require("feathers-hooks-common");
const isAction = (...args) => (hook) => args.includes(hook.data.action);


module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [
            iff(isAction("passwordChange", "identityChange"), authenticate("jwt")),
        ],
        update: [],
        patch: [],
        remove: [],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [
            iff(isAction("passwordChange"), async(context) => {
                await context.app
                    .service("users")
                    .patch(context.result._id, { resetPassword: false });
            }),
        ],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};