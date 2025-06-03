const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/TeacherController");

router.get("/", TeacherController.getAll);
router.get("/:id", TeacherController.getById);
router.post("/", TeacherController.create);
router.put("/:id", TeacherController.update);
router.delete("/:id", TeacherController.delete);

module.exports = router;
