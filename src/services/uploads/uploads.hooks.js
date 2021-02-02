const { authenticate } = require("@feathersjs/authentication").hooks;
const dauria = require("dauria");

const initializeArt = require("../../hooks/initializeArt");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [
      function (context) {
        if (!context.data.uri && context.params.file) {
          const file = context.data.uri;
          const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
          context.data = { uri: uri };
        }
      },
    ],
    update: [],
    patch: [],
    remove: [],
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
