// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    // var options = {
    //   clientId: "Hwa3hKOJs0Jqcq_V1PXt5717T1FIVlE9tw6zlaX7aVM",
    //   clientSecret: "hcpNu2eU6HrYAW3f1a50mQFTTo-px769Hms9oNE0zuA",
    //   baseUrl: "https://sandbox.kopokopo.com",
    //   apiKey: "S90UtGVt4BA1NY5Cq-R9r_uDOkjgLUnbMHmy558iO5A",
    // };

    var options = {
      clientId: process.env.KOPOKOPO_CLIENT_ID,
      clientSecret:process.env.KOPOKOPO_CLIENT_SECRET,
      baseUrl: process.env.KOPOKOPO_BASE_URL,
      apiKey: process.env.KOPOKOPO_API_KEY,
    };

    var K2 = require("k2-connect-node")(options);
    let token_details = {};
    const res = await K2.TokenService.getToken();
    token_details = res.access_token;

    var stkOptions = {
      paymentChannel: "M-PESA STK Push",
      tillNumber: "K943994",
      firstName: "pius",
      lastName: "gachaga",
      phoneNumber: "+254706335880",
      email: "williampius17@gmail.com",
      currency: "KES",
      amount: 1,
      callbackUrl: "http://localhost:3030/instagram",
      accessToken: token_details,
      metadata: {
        customerId: "123456789",
        reference: "123456",
        notes: "Payment for invoice 123456",
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
