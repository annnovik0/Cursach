const express = require("express");
const StudentController = require("../controllers/StudentController");

const router = express.Router();

router.get("/", StudentController.getAll);
router.get("/:id", StudentController.getById);
router.post("/", StudentController.create);
router.put("/:id", StudentController.update);
router.delete("/:id", StudentController.delete);

module.exports = router;
