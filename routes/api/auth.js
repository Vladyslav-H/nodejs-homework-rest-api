const express = require("express");

const controllers = require("../../controllers/auth");

const {
  validateBody,
  authenticate,
  validateSubscriptionField,
  upload,
} = require("../../middlewares");

const schemas = require("../../schemas/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validateBody(schemas.loginSchema), controllers.login);

router.post("/logout", authenticate, controllers.logout);

router.get("/current", authenticate, controllers.getCurrent);

router.patch(
  "/",
  authenticate,
  validateSubscriptionField(schemas.updateSubscriptionSchema),
  controllers.updateSubscriptionUser
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
