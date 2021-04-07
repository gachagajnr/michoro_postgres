// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.post("/instagram", (req, res) => {
    let trans = req.body.data.attributes;
    let data = {};
    // console.log("FROM KOPOPOKO",req.body.data.attributes.event.resource);
    if (req.body.data.attributes.status === "Success") {
      data = {
        transaction_id: trans.event.resource.id,
        amount: trans.event.resource.amount,
        status: trans.event.resource.status,
        system: trans.event.resource.system,
        currency: trans.event.resource.currency,
        reference: trans.event.resource.reference,
        till_number: trans.event.resource.till_number,
        origination_time: trans.event.resource.origination_time,
        sender_last_name: trans.event.resource.sender_last_name,
        sender_first_name: trans.event.resource.sender_first_name,
        sender_phone_number: trans.event.resource.sender_phone_number,
        metadata: trans.metadata,
      };
      // console.log("DATA",data);
      app
        .service("transactions")
        .create(data)
        .then((res) => {
          res.status(200);
          res.end("ok");
        })
        .catch((error) => {
          res.status(500);
          res.end(error.message);
        });
    } else {
      throw new Error("An error occurred");
    }
  });
};
