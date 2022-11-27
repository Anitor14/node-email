require("dotenv").config();
// we have to configure the dotenv so we can access our env files.
require("express-async-errors");
//  we need express-async-errors.

// importing express
const express = require("express");
const app = express();

const sendEmail = require("./controllers/sendEmail");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json()); // this enables us to be able to access our json files coming from our req.body.

// routes
app.get("/", (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">send email</a>');
});

app.get("/send", sendEmail);

// running our middleware.
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
