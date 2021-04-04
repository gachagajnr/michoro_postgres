// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.post('/instagram', (req, res) =>{
    const transaction_service = app.service('transactions');
    let trans=req.body
    // console.log("AAAAAAAAAAAAAAAAAAA", res.location);
     
    console.log("BODY DATA",req.body.data);
    console.log("ATTRIBUTES",req.body.data.attributes);


    // transaction_service.create(trans).then((res) => {
    //   res.status(200);
    //   res.end('ok');
    // }).catch(error => {
    //   res.status(500);
    //   res.end(error.message);
    // });
  });

};
