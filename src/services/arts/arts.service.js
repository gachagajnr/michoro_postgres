// Initializes the `arts` service on path `/arts`
const { Arts } = require('./arts.class');
const createModel = require('../../models/arts.model');
const hooks = require('./arts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/arts', new Arts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('arts');

  service.hooks(hooks);
};
