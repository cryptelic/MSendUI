exports.mailHandler = (request, response) => {
  const mailgun = require("mailgun-js");
  const {
    generateMailgunMessageFormat,
  } = require("../helpers/message-formatter");

  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    host: process.env.MAILGUN_HOST,
  });

  // parse the message information
  const messageInformation = generateMailgunMessageFormat(request);

  mg.messages().send(
    messageInformation,
    function (error, body) {
      console.log(body);
      response.json(body);
    },
    (error) => {
      console.log(error.message);
      response.send(`Something went wrong. ${error.message}`);
    }
  );
};
