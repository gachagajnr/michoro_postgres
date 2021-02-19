// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;

    result.arts.map((art) => {
      return app.service("arts").patch(art, { isSold: true });
    });
    // await app.service('arts').patch(result.art)
    console.log(result);
    return context;
  };
};
