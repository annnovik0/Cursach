const { Student } = require("../../models");

class StudentService {
  static async getAllStudents() {
    return Student.findAll();
  }

  static async getStudentById(id) {
    return Student.findByPk(id);
  }

  static async createStudent(data) {
    return Student.create(data);
  }

  static async updateStudent(id, data) {
    const student = await Student.findByPk(id);
    if (!student) return null;
    return student.update(data);
  }

  static async deleteStudent(id) {
    const student = await Student.findByPk(id);
    if (!student) return null;
    await student.destroy();
    return student;
  }
  static async updateAverageGradeIfComplete(studentId) {
    const student = await Student.findByPk(studentId);
    const disciplines = await Discipline.findAll();
    const assessments = await Assessment.findAll({ where: { studentId } });

    if (!student || disciplines.length === 0) return;

    // Проверка есть ли оценки по всем дисциплинам
    const grades = assessments.map((a) => a.finalGrade);
    if (grades.length !== disciplines.length || grades.includes(null)) {
      await student.update({ averageGrade: null });
      return;
    }

    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const avg = sum / grades.length;
    await student.update({ averageGrade: parseFloat(avg.toFixed(2)) });
  }
}

module.exports = StudentService;
