const processOrder = require("../../hooks/process-order");

const stkPush = require("../../hooks/stk-push");

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
    create: [stkPush()],
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
