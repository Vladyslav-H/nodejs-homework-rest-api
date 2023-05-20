const { HttpError } = require("../helpers");

const validateFavoriteField = (schema) => {
  const func = (req, res, next) => {
    if (!Object.keys(req.body).length) {
      next(HttpError(400, "missing field favorite"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateFavoriteField;
