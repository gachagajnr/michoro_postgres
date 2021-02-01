// Application hooks that run for every service
const { when } = require("feathers-hooks-common");
const authorize = require("./hooks/abilities");
const authenticate = require("./hooks/authenticate");

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [
            when(
                (hook) => hook.params.provider && `/${hook.path}` !== "/authentication",
                authenticate,
                authorize()
            ),
        ],
        update: [
            when(
                (hook) => hook.params.provider && `/${hook.path}` !== "/authentication",
                authenticate,
                authorize()
            ),
        ],
        patch: [
            when(
                (hook) => hook.params.provider && `/${hook.path}` !== "/authentication",
                authenticate,
                authorize()
            ),
        ],
        remove: [
            when(
                (hook) => hook.params.provider && `/${hook.path}` !== "/authentication",
                authenticate,
                authorize()
            ),
        ],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
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