// Initializes the `arts` service on path `/arts`
const { Arts } = require("./arts.class");
const createModel = require("../../models/arts.model");
const hooks = require("./arts.hooks");
const multer = require("multer");
const multipartMiddleware = multer();
const search = require("feathers-mongodb-fuzzy-search");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    whitelist: ["$text", "$search"],
  };

  // Initialize our service with any options it requires
  app.use(
    "/arts",
    multipartMiddleware.single("uri"),

    // another middleware, this time to
    // transfer the received file to feathers
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    new Arts(options, app)
  );
  // Get our initialized service so that we can register hooks
  const service = app.service("arts");

  service.hooks(hooks);
};
