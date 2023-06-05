const Jimp = require("jimp");
const HttpError = require("./HttpError");

const resizeAvatar = async (avatarPath) => {
  const img = await Jimp.read(avatarPath);
  img
    .resize(250, 250, function (error) {
      if (error) throw HttpError;
    })
    .write(avatarPath);
};

module.exports = resizeAvatar;
