const StudentService = require("../services/StudentService");

class StudentController {
  static async getAll(req, res) {
    const students = await StudentService.getAllStudents();
    res.json(students);
  }

  static async getById(req, res) {
    const student = await StudentService.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  }

  static async create(req, res) {
    const student = await StudentService.createStudent(req.body);
    res.status(201).json(student);
  }

  static async update(req, res) {
    const updated = await StudentService.updateStudent(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Student not found" });
    res.json(updated);
  }

  static async delete(req, res) {
    const deleted = await StudentService.deleteStudent(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted" });
  }

  static async getDebtors(req, res) {
    const debtors = await StudentService.getDebtors();
    res.json(debtors);
  }

  static async getWithScholarship(req, res) {
    const students = await StudentService.getWithScholarship();
    res.json(students);
  }

  static async getGroupStats(req, res) {
    const stats = await StudentService.getGroupStats();
    res.json(stats);
  }
}

module.exports = StudentController;
