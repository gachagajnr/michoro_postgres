// Initializes the `tes` service on path `/tes`
const { Tes } = require('./tes.class');
const hooks = require('./tes.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tes',function (req, res, next) {
    console.log("body",req);
    next();
   }, new Tes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tes');

  service.hooks(hooks);
};
