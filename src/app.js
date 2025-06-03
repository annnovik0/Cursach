const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const disciplineRoutes = require("./routes/disciplineRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/disciplines", disciplineRoutes);
app.use("/api/assessments", assessmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
