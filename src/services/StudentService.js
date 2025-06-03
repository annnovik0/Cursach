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
}

module.exports = StudentService;
