// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const accountService = require("../../src/services/authmanagement/notifier");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;

    result.arts.forEach(function (item, index) {
      return app.service("arts").patch(art, { isSold: true });
    });
     accountService(app).notifier("sendOrderConfirmation", result);
    return context;
  };
};
