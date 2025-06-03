const { Student, Assessment, Discipline } = require("../../models");

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

    const grades = assessments.map((a) => a.finalGrade);
    if (grades.length !== disciplines.length || grades.includes(null)) {
      await student.update({ averageGrade: null });
      return;
    }

    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const avg = sum / grades.length;
    await student.update({ averageGrade: parseFloat(avg.toFixed(2)) });

    await StudentService.updateScholarshipAndDebtorStatus(student, assessments);
  }

  static async updateScholarshipAndDebtorStatus(student, assessments) {
    const hasDebt = assessments.some((a) => a.finalGrade < 4 || a.isAbsent);
    const average = student.averageGrade;

    let scholarship = 0;
    if (!hasDebt && average >= 4.5) {
      if (average >= 5.0) {
        scholarship = 5000;
      } else if (average >= 4.8) {
        scholarship = 3000;
      } else {
        scholarship = 2000;
      }
    }

    await student.update({
      isDebtor: hasDebt,
      scholarship,
    });
  }

  static async getDebtors() {
    return Student.findAll({ where: { isDebtor: true } });
  }

  static async getWithScholarship(minAmount = 2000) {
    return Student.findAll({
      where: {
        scholarship: {
          [require("sequelize").Op.gte]: minAmount,
        },
      },
    });
  }

  static async getGroupStats() {
    const { Group, Student } = require("../../models");

    const groups = await Group.findAll({
      include: {
        model: Student,
        as: "students",
      },
    });

    return groups.map((group) => {
      const total = group.students.length;
      const budgetCount = group.students.filter((s) => s.hasBenefit).length;
      const debtorCount = group.students.filter((s) => s.isDebtor).length;

      return {
        groupId: group.id,
        groupName: group.name,
        totalStudents: total,
        budgetCount,
        debtorCount,
      };
    });
  }
}

module.exports = StudentService;
