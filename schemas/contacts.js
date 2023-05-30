const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.min": "name minimum 3 character required",
    "string.max": "name maximum 30 character",
    "any.required": "missing required name field",
  }),
  email: Joi.string()
    .min(10)
    .max(40)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "uk", "ca"] },
    })
    .messages({
      "string.min": "email minimum 10 character required",
      "string.max": "email maximum 40 character",
      "string.email":
        "not valid email: '@' required, must have 'com','net','org','uk','ca' domain segment",
      "any.required": "missing required email field",
    })
    .required(),
  phone: Joi.string().min(10).max(20).required().messages({
    "string.min": "phone minimum 10 character required",
    "string.max": "phone maximum 20 character required",
    "any.required": "missing required phone field",
  }),
  favorite: Joi.boolean().messages({
    "boolean.base": "favorite must be a boolean",
  }),
});

const favoriteFieldSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "favorite fild is required",
    "boolean.base": "favorite must be a boolean",
  }),
});

module.exports = { addSchema, favoriteFieldSchema };
