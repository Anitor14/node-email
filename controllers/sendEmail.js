const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "hilma99@ethereal.email",
      pass: "suYttkZ32gTwE76ZuY",
    },
  });

  let info = await transporter.sendMail({
    from: '"Anitor Abraham" <anitorabraham@gmail.com>',
    to: "bar@example.com",
    subject: "hello world how is everyone doing",
    html: "<h2>Sending emails with node.js</h2>",
  });

  res.json({ info });
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "abrahamanitor@gmail.com", // change to your recipient.
    from: "anitorabraham@gmail.com", // change to your verified sender.
    subject: "sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with node.js",
    html: "<strong>and easy to do anywhere, even with node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
};
module.exports = sendEmail;
