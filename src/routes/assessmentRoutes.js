const express = require("express");
const router = express.Router();
const AssessmentController = require("../controllers/AssessmentController");

router.post("/", AssessmentController.addOrUpdateAssessment);
router.get("/", AssessmentController.getAllAssessments);

module.exports = router;
