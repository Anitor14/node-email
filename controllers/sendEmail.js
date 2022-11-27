const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jerrold.bins85@ethereal.email",
      pass: "U7xm4phgfXXMfaQJYt",
    },
  });

  let info = await transporter.sendMail({
    from: '"Anitor Abraham" <anitorabraham@gmail.com>',
    to: "bar@example.com",
    subject: "hello world how is everyone doing",
    html: "<h2>Sending emails with node.js</h2>",
  });

  res.send(info);
};

module.exports = sendEmail;
