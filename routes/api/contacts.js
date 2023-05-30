const express = require("express");

const controllers = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  validateFavoriteField,
  authenticate,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, controllers.listContacts);

router.get("/:id", authenticate, isValidId, controllers.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addContact
);

router.delete("/:id", authenticate, isValidId, controllers.removeContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  controllers.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateFavoriteField(schemas.favoriteFieldSchema),
  controllers.updateStatusContact
);

module.exports = router;
