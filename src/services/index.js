const users = require("./users/users.service.js");
const arts = require("./arts/arts.service.js");
const authmanagement = require("./authmanagement/authmanagement.service.js");
const mailer = require("./mailer/mailer.service.js");
const mails = require("./mails/mails.service.js");
const uploads = require("./uploads/uploads.service.js");
const test = require("./test/test.service.js");
const tes = require("./tes/tes.service.js");
const transactions = require("./transactions/transactions.service.js");
const orders = require("./orders/orders.service.js");
const sms = require("./sms/sms.service.js");
const mailsSent = require("./mails-sent/mails-sent.service.js");
const smsSent = require("./sms-sent/sms-sent.service.js");
const supportMails = require("./support-mails/support-mails.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(arts);
  app.configure(authmanagement);
  app.configure(mailer);
  app.configure(mails);
  app.configure(uploads);
  app.configure(test);
  app.configure(tes);
  app.configure(transactions);
  app.configure(orders);
  app.configure(sms);
  app.configure(mailsSent);
  app.configure(smsSent);
  app.configure(supportMails);
};
