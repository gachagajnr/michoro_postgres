// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const accountService = require("../../src/services/authmanagement/notifier");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;
   
    result.arts.forEach(async function (item, index) {
      await app.service("arts").patch(item, { isSold: true });
    });
   

    return context;
  };
};
