const processOrder = require("../../hooks/process-order");
const accountService = require("../authmanagement/notifier");

const sendOrderConfirmation = require("../../hooks/send-order-confirmation");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processOrder()],
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
