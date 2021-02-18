// eslint-disable-next-line no-unused-vars
module.exports = function (app) {

  app.post('/instagram', (req, res) =>{
    const transaction_service = app.service('transactions');
    let trans=req.body
  // console.log("TADAAAAAAAAAAAAAAAAAAAAAAAAAA",req.body)
    transaction_service.create(trans).then((res) => {
     console.log(res)
    }).catch(error => {
      console.log(error)
    });
  });
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
};
