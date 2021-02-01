const users = require('./users/users.service.js');
const arts = require('./arts/arts.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
const mailer = require('./mailer/mailer.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(arts);
  app.configure(authmanagement);
  app.configure(mailer);
};
