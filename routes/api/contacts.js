const express = require("express");

const controllers = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  validateFavoriteField,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", controllers.listContacts);

router.get("/:id", isValidId, controllers.getContactById);

router.post("/", validateBody(schemas.addSchema), controllers.addContact);

router.delete("/:id", isValidId, controllers.removeContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  controllers.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateFavoriteField(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

module.exports = router;
