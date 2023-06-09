require("dotenv").config();

const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, SENDGRID_FROM } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data, from = SENDGRID_FROM) => {
  try {
    const email = { ...data, from };
    await sgMail.send(email);
    return true;
  } catch (error) {
    console.log('sendEmail',error.message);
    return false;
  }
};

module.exports = sendEmail;
