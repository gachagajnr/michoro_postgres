

module.exports = {
  before: {
    all: [
      function (context){
        console.log("CONTEXT ALL",context.data)
      }
    ],
    find: [],
    get: [],
    create: [
      function (context){
        console.log("CONTEXT TEST",context.data)
      }
    ],
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
