// Initializes the `mails-sent` service on path `/mails-sent`
const { MailsSent } = require('./mails-sent.class');
const createModel = require('../../models/mails-sent.model');
const hooks = require('./mails-sent.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mails-sent', new MailsSent(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mails-sent');

  service.hooks(hooks);
};
