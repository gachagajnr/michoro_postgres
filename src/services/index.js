const users = require('./users/users.service.js');
const arts = require('./arts/arts.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
const mailer = require('./mailer/mailer.service.js');
const mails = require('./mails/mails.service.js');
const uploads = require('./uploads/uploads.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(arts);
  app.configure(authmanagement);
  app.configure(mailer);
  app.configure(mails);
  app.configure(uploads);
};
