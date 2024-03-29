// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data } = context;
    if (!data) {
      throw new Error("no data");
    }

    function getUniqueID() {
      return Math.floor(Math.random() * 899999 + 100000);
    }

    context.data = {
      amount: data.amount,
      arts: data.arts,
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      location: data.location,
      street: data.street,
      city: data.city,
      paying: data.paying,
      phone: data.phone,
      orderId: getUniqueID(),
    };

    return context;
  };
};
