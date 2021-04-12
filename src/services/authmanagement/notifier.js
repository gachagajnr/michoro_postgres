const path = require("path");
const pug = require("pug");

module.exports = function (app) {
  const returnEmail = "michoro.ke@gmail.com";
  function getLink(type, hash) {
    const url = "https://michoro.com/" + type + "?token=" + hash;
    return url;
  }
  async function sendSms(sms) {
    try {
      const res = await app.service("sms").create(sms);
      if (res.message)
        app
          .service("sms-sent")
          .create({ from: sms.from, to: sms.to, message: sms.message });
    } catch (error) {
      console.log("SMS SENDING FAILED", error);
    }
  }
  async function sendEmail(email) {
     await app
      .service("mailer")
      .create(email)
      .then(function (result) {
        return app
          .service("mails-sent")
          .create({ to: email.to[0], subject: email.subject });
      })
      .catch((err) => {
        console.log("Error sending email", err.message);
      });
  }

  return {
    notifier: function (type, user, notifierOptions) {
      let hashLink;
      var logoLink = "https://michoroarts.s3.us-east-2.amazonaws.com/logo.png";
      let email, sms;
      var emailAccountTemplatesPath = path.join(
        app.get("src"),
        "email-templates",
        "account"
      );
      var templatePath;
      var compiledHTML;
      switch (type) {
        case "resendVerifySignup": //sending the user the verification email
          hashLink = getLink("verify", user.verifyToken);

          templatePath = path.join(
            emailAccountTemplatesPath,
            "verify-email.pug"
          );

          compiledHTML = pug.compileFile(templatePath)({
            logo: logoLink,
            name: user.firstname || user.email,
            hashLink,
            returnEmail,
          });
          email = {
            from: "Michoro Art info@michoro.com",
            to: [user.email],
            subject: "Confirm Signup",
            html: compiledHTML,
          };

          return sendEmail(email);
          break;

        case "verifySignup": // confirming verification
          hashLink = getLink("verify", user.verifyToken);

          templatePath = path.join(
            emailAccountTemplatesPath,
            "email-verified.pug"
          );

          compiledHTML = pug.compileFile(templatePath)({
            logo: logoLink,
            name: user.firstname || user.email,
            hashLink,
            returnEmail,
          });
          email = {
            from: "Michoro Art info@michoro.com",
            to: [user.email],
            subject: "Thank you, your email has been verified",
            html: compiledHTML,
          };
          return sendEmail(email);
          break;

        case "sendResetPwd":
          hashLink = getLink("reset", user.resetToken);

          templatePath = path.join(
            emailAccountTemplatesPath,
            "reset-password.pug"
          );

          compiledHTML = pug.compileFile(templatePath)({
            logo: logoLink,
            name: user.firstname || user.email,
            hashLink,
            returnEmail,
          });
          email = {
            from: "Michoro Art info@michoro.com",
            to: [user.email],
            subject: "Reset Password",
            html: compiledHTML,
          };
          return sendEmail(email);
          break;

        case "resetPwd":
          hashLink = getLink("reset", user.resetToken);

          templatePath = path.join(
            emailAccountTemplatesPath,
            "password-was-reset.pug"
          );

          compiledHTML = pug.compileFile(templatePath)({
            logo: logoLink,
            name: user.firstname || user.email,
            hashLink,
            returnEmail,
          });
          email = {
            from: "Michoro Art info@michoro.com",
            to: [user.email],
            subject: "Your password was reset",
            html: compiledHTML,
          };
          return sendEmail(email);
          break;

        case "passwordChange":
          templatePath = path.join(
            emailAccountTemplatesPath,
            "password-change.pug"
          );

          compiledHTML = pug.compileFile(templatePath)({
            logo: logoLink,
            name: user.firstname || user.email,
            returnEmail,
          });
          email = {
            from: "Michoro Art info@michoro.com",
            to: [user.email],
            subject: "Your password was changed",
            html: compiledHTML,
          };
          return sendEmail(email);
          break;

        case "identityChange":
          hashLink = getLink("verifyChanges", user.verifyToken);

          templatePath = path.join(
            emailAccountTemplatesPath,
            "identity-change.pug"
          );

          compiledHTML = pug.compileFile(templatePath)({
            logo: logoLink,
            name: user.firstname || user.email,
            hashLink,
            returnEmail,
            changes: user.verifyChanges,
          });
          email = {
            from: "Michoro Art info@michoro.com",
            to: [user.email],
            subject: "Your account was changed. Please verify the changes",
            html: compiledHTML,
          };
          return sendEmail(email);
          break;

        case "sendOrderConfirmation":
          console.log(user.metadata.email);
          templatePath = path.join(
            emailAccountTemplatesPath,
            "order-confirmed.pug"
          );

          compiledHTML = pug.compileFile(templatePath)({
            logo: logoLink,
            name: user.sender_first_name,
            email: user.metadata.email,
            order: user.metadata.orderId,
            returnEmail,
          });
          email = {
            from: "Michoro Art info@michoro.com",
            to:[ user.metadata.email],
            subject: `Your order ${user.metadata.orderId} at Michoro Art has been placed`,
            html: compiledHTML,
          };
          sms = {
            from: "MICHOROART",
            to: `+${user.sender_phone_number}`,
            message: `Your order has been placed successfully.Your Order ID is ${user.metadata.orderId}. Keep this as it will be used to identify the order you placed`,
          };

          return sendEmail(email) && sendSms(sms);
          break;
        default:
          break;
      }
    },
  };
};
