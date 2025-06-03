const express = require("express");
const router = express.Router();
const disciplineController = require("../controllers/disciplineController");

router.get("/", disciplineController.getAll);
router.get("/:id", disciplineController.getById);
router.post("/", disciplineController.create);
router.put("/:id", disciplineController.update);
router.delete("/:id", disciplineController.remove);

module.exports = router;
