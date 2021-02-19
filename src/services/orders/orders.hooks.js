

const processOrder = require('../../hooks/process-order');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processOrder()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
