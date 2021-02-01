// Initializes the `mailer` service on path `/mailer`
const hooks = require("./mailer.hooks");
const Mailer = require("feathers-mailer");
var pP = require("nodemailer-pepipost-transport");

module.exports = function(app) {
    const options = {
        paginate: app.get("paginate")
    };

    // Initialize our service with any options it requires
    app.use(
        "/mailer",
        Mailer(
            pP({
                auth: {
                    api_key: "461475d3b9db465bb1e4f48e73cf4872",
                },
            })
        )
    );
    // Get our initialized service so that we can register hooks
    const service = app.service("mailer");

    service.hooks(hooks);
};