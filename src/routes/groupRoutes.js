const express = require("express");
const router = express.Router();
const GroupController = require("../controllers/GroupController");

router.get("/", GroupController.getAll);
router.get("/:id", GroupController.getById);
router.post("/", GroupController.create);
router.put("/:id", GroupController.update);
router.delete("/:id", GroupController.delete);

module.exports = router;
