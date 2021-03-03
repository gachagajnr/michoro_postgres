// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, data, params } = context;
    if (!data) {
      throw new Error("no data");
    }
    await app
      .service("uploads")
      .create({ uri: data.profile })
      .then((res) => {
        context.data = {
          profile: res.id,
        };
      })
      .catch((e) => {
        throw new Error("Publishing Not successful");
      });

    return context;
  };
};
