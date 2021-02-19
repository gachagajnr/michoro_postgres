// Initializes the `sms-sent` service on path `/sms-sent`
const { SmsSent } = require('./sms-sent.class');
const createModel = require('../../models/sms-sent.model');
const hooks = require('./sms-sent.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sms-sent', new SmsSent(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sms-sent');

  service.hooks(hooks);
};
