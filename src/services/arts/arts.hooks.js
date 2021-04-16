const { authenticate } = require("@feathersjs/authentication").hooks;
const { fastJoin } = require("feathers-hooks-common");
const search = require("feathers-mongodb-fuzzy-search");
const uploadArt = require("../../hooks/upload-art");
const authorResolver = {
  joins: {
    author: (...args) => async (agent, context) =>
      (agent.author = (
        await context.app.service("users").find({
          query: {
            _id: agent.userId,
            $select: ["firstname", "lastname", "about"],
          },
          paginate: false,
        })
      )[0]),
    uri: () => async (art, context) =>
      (art.uri = process.env.BUCKET + `/${art.art}`),
  },
};
const moreResolver = {
  joins: {
    moreWorks: () => async (art, context) =>
      (art.moreWorks = await context.app.service("arts").find({
        query: {
          userId: art.userId,

          //paginate: false
        },
      })),
    topPicks: () => async (art, context) =>
      (art.topPicks = await context.app.service("arts").find({
        query: {
          $or: [{ category: art.category }, { price: art.price }],
          // author: art.author,
          //paginate: false
        },
      })),
    //GENERATE URI WITH BUCKET LINK AND ART.ART
    // uri: () => async (art, context) => (art.uri = "process.env.BUCKET" + art.art),
  },
};
module.exports = {
  before: {
    all: [
      // search({ escape: false }),
    ],
    find: [],
    get: [],
    create: [uploadArt()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [fastJoin(authorResolver)],
    find: [],
    get: [fastJoin(moreResolver)],
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
