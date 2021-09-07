exports.generateMailGunRequest = (data) => {
  let { to, cc, bcc, subject, message } = data;

  let mailGunFormattedData = {
    to,
    from: process.env.MAILGUN_FROM,
    cc,
    bcc,
    subject,
    message,
  };

  return mailGunFormattedData;
};

exports.generateSendGridRequest = (data) => {
  if (data) {
    let { to, cc, bcc, subject, message } = data;

    let sendGridformattedData = {
      to,
      from: process.env.MAILGUN_FROM,
      cc,
      bcc,
      subject,
      content: message,
    };

    return sendGridformattedData;
  }
  return {};
};
