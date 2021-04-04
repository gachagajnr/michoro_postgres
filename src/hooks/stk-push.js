// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    var options = {
      clientId: "Hwa3hKOJs0Jqcq_V1PXt5717T1FIVlE9tw6zlaX7aVM",
      clientSecret: "hcpNu2eU6HrYAW3f1a50mQFTTo-px769Hms9oNE0zuA",
      baseUrl: "https://sandbox.kopokopo.com",
      apiKey: "S90UtGVt4BA1NY5Cq-R9r_uDOkjgLUnbMHmy558iO5A",
    };

    var K2 = require("k2-connect-node")(options);
    var StkService = K2.StkService;

    let token_details = {};

    const res = await K2.TokenService.getToken();
    token_details = res.access_token;


    var stkOptions = {
      tillNumber: "K7560773",
      firstName: "PIUS",
      lastName: "GACHAGA",
      phoneNumber: "+254706335880",
      email: "williampius17@gmail.com",
      currency: "KES",
      amount: 20,
      callbackUrl: "http://localhost:3030/instagram",
      paymentChannel: "M-PESA STK Push",
      accessToken: token_details,

      //A maximum of 5 key value pairs
      metadata: {
        customerId: "123456789",
        reference: "123456",
        notes: "Payment for invoice 123456",
      },
    };
    if (token_details === null) throw new Error("An Error Occurred");

    StkService.initiateIncomingPayment(stkOptions)
      .then((response) => {
        console.log("STK PUSH RESPONSE", response);
      })
      .catch((error) => {
        console.log("STK PUSH ERROR", error);
      });
    return context;
  };
};
