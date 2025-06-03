const { Assessment, Student, Discipline } = require("../../models");

const calculateFinalGrade = async (studentId, disciplineId) => {
  const discipline = await Discipline.findByPk(disciplineId);
  const assessment = await Assessment.findOne({
    where: { studentId, disciplineId },
  });

  if (!discipline || !assessment) return null;

  const { midtermGrade, examGrade } = assessment;

  if (midtermGrade == null || examGrade == null) return null;

  const finalGrade =
    midtermGrade * discipline.midtermWeight + examGrade * discipline.examWeight;

  return finalGrade;
};

module.exports = {
  async addOrUpdateAssessment(req, res) {
    try {
      const { studentId, disciplineId, midtermGrade, examGrade, isAbsent } =
        req.body;

      const student = await Student.findByPk(studentId);
      if (!student || student.status === "академ") {
        return res
          .status(400)
          .json({ error: "Оценки нельзя выставлять студенту в академе." });
      }

      let assessment = await Assessment.findOne({
        where: { studentId, disciplineId },
      });

      if (!assessment) {
        assessment = await Assessment.create({
          studentId,
          disciplineId,
          midtermGrade,
          examGrade,
          isAbsent: !!isAbsent,
        });
      } else {
        await assessment.update({
          midtermGrade,
          examGrade,
          isAbsent: !!isAbsent,
        });
      }

      const finalGrade = await calculateFinalGrade(studentId, disciplineId);

      if (finalGrade !== null) {
        await assessment.update({ finalGrade });

        if (finalGrade < 4 || isAbsent) {
          await student.update({ isDebtor: true }); // студент становится должником
        }
      }

      return res.json(assessment);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  },

  async getAllAssessments(req, res) {
    const data = await Assessment.findAll();
    res.json(data);
  },
};
