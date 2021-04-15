// Initializes the `support-mails` service on path `/support-mails`
const { SupportMails } = require('./support-mails.class');
const createModel = require('../../models/support-mails.model');
const hooks = require('./support-mails.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/support-mails', new SupportMails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('support-mails');

  service.hooks(hooks);
};
