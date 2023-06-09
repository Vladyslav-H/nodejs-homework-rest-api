const { BASE_URL, PORT } = process.env;

const createVerificationEmail = (verificationToken, email) => {
  return {
    to: email,
    subject: "Verify email",
    html: `<a target=_"blank" href="${BASE_URL}:${PORT}/users/verify/${verificationToken}">Click for verify email</a>`,
  };
};

module.exports = createVerificationEmail;
