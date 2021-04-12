// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result } = context;

    var options = {
      clientId: process.env.KOPOKOPO_CLIENT_ID,
      clientSecret: process.env.KOPOKOPO_CLIENT_SECRET,
      baseUrl: process.env.KOPOKOPO_BASE_URL,
      apiKey: process.env.KOPOKOPO_API_KEY,
    };

    var K2 = require("k2-connect-node")(options);
    let token_details = {};
    const res = await K2.TokenService.getToken();
    token_details = res.access_token;

    var stkOptions = {
      paymentChannel: process.env.CHANNEL,
      tillNumber: process.env.TILL_NUMBER,
      firstName: result.firstname,
      lastName: result.lastname,
      phoneNumber: result.paying,
      email: result.email,
      currency: process.env.CURRENCY,
      amount: 1, // REMEMBER TO CHANGE THIS LATER
      callbackUrl: process.env.CALLBACK_URL,
      accessToken: token_details,
      metadata: {
        orderPurchased: result.arts,
        orderId: result.orderId,
        email: result.email,
      },
    };
    if (token_details === null) throw new Error("An Error Occurred");

    K2.StkService.initiateIncomingPayment(stkOptions)
      .then((response) => {
        console.log("STK RESPONSE", response);
      })
      .catch((error) => {
        console.log("STK ERROR", error);
      });
    return context;
  };
};
