const { Teacher } = require("../../models");

class TeacherController {
  static async getAll(req, res) {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  }

  static async getById(req, res) {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.json(teacher);
  }

  static async create(req, res) {
    const newTeacher = await Teacher.create(req.body);
    res.status(201).json(newTeacher);
  }

  static async update(req, res) {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });

    await teacher.update(req.body);
    res.json(teacher);
  }

  static async delete(req, res) {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });

    await teacher.destroy();
    res.json({ message: "Teacher deleted" });
  }
}

module.exports = TeacherController;
