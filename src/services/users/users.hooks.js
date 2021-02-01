const { authenticate } = require("@feathersjs/authentication").hooks;
// const { fastJoin } = require("feathers-hooks-common");
const accountService = require("../authmanagement/notifier");
const verifyHooks = require("feathers-authentication-management").hooks;
const {
    disallow,
    iff,
    preventChanges,
    isProvider,
    discard,
} = require("feathers-hooks-common");

const {
    hashPassword,
    protect,
} = require("@feathersjs/authentication-local").hooks;

// const moreResolver = {
//   joins: {
//     cart: () => async (art, context) =>
//       (art.cart = await context.app.service("arts").find({
//         query: {
//           _id: art.cart.items,
//         },
//       })),
//   },
// };

module.exports = {
    before: {
        all: [],
        find: [authenticate("jwt")],
        get: [authenticate("jwt")],
        create: [hashPassword("password"), verifyHooks.addVerification()],
        update: [disallow("external")],
        patch: [
            iff(
                isProvider("external"),
                preventChanges(
                    "email",
                    "isVerified",
                    "verifyToken",
                    "verifyShortToken",
                    "verifyExpires",
                    "verifyChanges",
                    "resetToken",
                    "resetShortToken",
                    "resetExpires"
                ),
                hashPassword("password"),
                authenticate("jwt")
            ),
        ],
        remove: [authenticate("jwt")],
    },

    after: {
        all: [
            // Make sure the password field is never sent to the client
            // Always must be the last hook
            protect("password"),
        ],
        find: [],
        get: [],
        create: [
            (context) => {
                accountService(context.app).notifier(
                    "resendVerifySignup",
                    context.result
                );
            },
            verifyHooks.removeVerification(),
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