const path = require('path');
const pug = require('pug');


module.exports = function (app) {


  function getLink(type, hash) {
    const url = "https://michoro.com/" + type + "?token=" + hash;
    return url;
  }
  async function sendSms(sms) {
    try {
      const res = await app.service("sms").create(sms);
      console.log("SMS SENT SUCCESSFULLY", res);
    } catch (error) {
      console.log("SMS SENDING FAILED", error);
    }
  }
  async function sendEmail(email) {
    return await app
      .service("mailer")
      .create(email)
      .then(function (result) {
        console.log("Sent email", result);
      })
      .catch((err) => {
        console.log("Error sending email", err);
      });
  }

  return {
    notifier: function (type, user, notifierOptions) {
      let tokenLink;
      
      let email, sms;
      var emailAccountTemplatesPath = path.join(app.get('src'), 'email-templates', 'account')
      var templatePath;
      var compiledHTML;
            switch (type) {
        case "resendVerifySignup": //sending the user the verification email
          tokenLink = getLink("verify", user.verifyToken);

          templatePath = path.join(emailAccountTemplatesPath, 'password-reset.pug')

          compiledHTML = pug.compileFile(templatePath)({
            logo: '',
            name: user.name || user.email,
            tokenLink,
            
          })
          email = {
            from: "Michoro Art info@michoro.com",
            to: [user.email],
            subject: "Verify Signup",
            html: compiledHTML,
          };
          
          return sendEmail(email)  ;
          break;

        case "verifySignup": // confirming verification
          tokenLink = getLink("verify", user.verifyToken);
          email = {
            from: "MichoroArt@michoro.com",
            to: [user.email],
            subject: "Confirm Signup",
            html: "Thanks for verifying your email",
          };
          return sendEmail(email);
          break;

        case "sendResetPwd":
          tokenLink = getLink("reset", user.resetToken);
          email = {
            from: "Forgotpassword@pepisandbox.com",
            to: [user.email],
            subject: "Reset Password Request",
            html: tokenLink,
          };
          return sendEmail(email);
          break;

        case "resetPwd":
          tokenLink = getLink("reset", user.resetToken);
          email = {
            from: "ResetpasswordSuccess@pepisandbox.com",
            to: [user.email],
            subject: "Reset Password",
            html: "Your Password has been changed successfully",
          };
          return sendEmail(email);
          break;

        case "passwordChange":
          email = {};
          return sendEmail(email);
          break;

        case "identityChange":
          tokenLink = getLink("verifyChanges", user.verifyToken);
          email = {};
          return sendEmail(email);
          break;

        default:
          break;
      }
    },
  };
};
