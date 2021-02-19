// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, data, params } = context;
    if (!data) {
      throw new Error("no data");
    }

    const res = await app.service("transactions").find({
      query: {
        amount: `${data.amount}.0`,
        sender_phone: data.paying,
        $limit: 1,
        $sort: {
          createdAt: -1,
        },
      },
    });
    function getUniqueID() {
      for (var i = 0; i < 5; i++)
        return Date.now() + (Math.random() * 100000).toFixed();
    }
    if (res.total !== 1) {
      throw new Error("Matching Transaction Not Found");
    }
    if (res.data[0]._id)
      context.data = {
        paidBy: `${res.data[0].first_name} ${res.data[0].middle_name} ${res.data[0].last_name}`,
        transaction_ref_no: res.data[0].transaction_reference,
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
