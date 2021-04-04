var options = {
  clientId: "Hwa3hKOJs0Jqcq_V1PXt5717T1FIVlE9tw6zlaX7aVM",
  clientSecret: "hcpNu2eU6HrYAW3f1a50mQFTTo-px769Hms9oNE0zuA",
  baseUrl: "https://sandbox.kopokopo.com/oauth/token",
  apiKey: "S90UtGVt4BA1NY5Cq-R9r_uDOkjgLUnbMHmy558iO5A",
};

var K2 = require("k2-connect-node")(options);
var StkService = K2.StkService;


var tokens = K2.TokenService;
var token_details;

tokens
  .getToken()
  .then((response) => {
    // Developer can decide to store the token_details and track expiry
    token_details = response;
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

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
  accessToken: "my_access_token",

  //A maximum of 5 key value pairs
  metadata: {
    customerId: "123456789",
    reference: "123456",
    notes: "Payment for invoice 123456",
  },
};
StkService.initiateIncomingPayment(stkOptions)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });