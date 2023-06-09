const Joi = require("joi");

const subscriptionList = ["starter", "pro", "business"];

const loginSchema = Joi.object({
  email: Joi.string()
    .min(10)
    .max(40)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "uk", "ca"] },
    })
    .required()
    .messages({
      "string.min": "email minimum 10 character required",
      "string.max": "email maximum 40 character",
      "string.email":
        "not valid email: '@' required, must have 'com','net','org','uk','ca' domain segment",
      "any.required": "email is required field",
    }),
  password: Joi.string().min(7).required().messages({
    "string.min": "password minimum 7 character required",
    "any.required": "password is required field",
  }),
});

const registerSchema = Joi.object({
  email: Joi.string()
    .min(10)
    .max(40)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "uk", "ca"] },
    })
    .required()
    .messages({
      "string.min": "email minimum 10 character required",
      "string.max": "email maximum 40 character",
      "string.email":
        "not valid email: '@' required, must have 'com','net','org','uk','ca' domain segment",
      "any.required": "email is required field",
    }),
  password: Joi.string().min(7).required().messages({
    "string.min": "password minimum 7 character required",
    "any.required": "password is required field",
  }),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required()
    .messages({
      "valid.base": "subscription must be one of: starter, pro, business",
    }),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .min(10)
    .max(40)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "uk", "ca"] },
    })
    .required()
    .messages({
      "string.min": "email minimum 10 character required",
      "string.max": "email maximum 40 character",
      "string.email":
        "not valid email: '@' required, must have 'com','net','org','uk','ca' domain segment",
      "any.required": "email is required field",
    }),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  emailSchema,
};
