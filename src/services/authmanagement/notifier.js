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
      switch (type) {
        case "resendVerifySignup": //sending the user the verification email
          tokenLink = getLink("verify", user.verifyToken);
          email = {
            from: "SendVerifyEmail@pepisandbox.com",
            to: [user.email],
            subject: "Verify Signup",
            html: tokenLink,
          };
          sms = {
            from: "MICHOROART",
            to: user.phone,
            message: `Your Mobile Verification pin is ${user.verifyShortToken}`,
          };
          return sendEmail(email)  ;
          break;

        case "verifySignup": // confirming verification
          tokenLink = getLink("verify", user.verifyToken);
          email = {
            from: "VerifysignUpSuccess@pepisandbox.com",
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
