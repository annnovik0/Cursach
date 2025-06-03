const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/StudentController");

router.get("/", StudentController.getAll);
router.get("/:id", StudentController.getById);
router.post("/", StudentController.create);
router.put("/:id", StudentController.update);
router.delete("/:id", StudentController.delete);
router.get("/stats/debtors", StudentController.getDebtors);
router.get("/stats/scholarship", StudentController.getWithScholarship);
router.get("/stats/groups", StudentController.getGroupStats);

module.exports = router;
