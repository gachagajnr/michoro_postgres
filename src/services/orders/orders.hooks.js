const processOrder = require("../../hooks/process-order");
const accountService = require("../authmanagement/notifier");

const sendOrderConfirmation = require("../../hooks/send-order-confirmation");
 
const stkPush = require('../../hooks/stk-push');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [stkPush(), processOrder(), stkPush()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      sendOrderConfirmation(),
      (context) => {
        accountService(context.app).notifier(
          "sendOrderConfirmation",
          context.result
        );
      },
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
