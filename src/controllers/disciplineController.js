const { Discipline, Teacher } = require("../../models");

module.exports = {
  async getAll(req, res) {
    const disciplines = await Discipline.findAll({ include: Teacher });
    res.json(disciplines);
  },

  async getById(req, res) {
    const discipline = await Discipline.findByPk(req.params.id, {
      include: Teacher,
    });
    if (!discipline)
      return res.status(404).json({ error: "Discipline not found" });
    res.json(discipline);
  },

  async create(req, res) {
    const { name, teacherId, coefficientMidterm, coefficientExam } = req.body;
    const discipline = await Discipline.create({
      name,
      teacherId,
      coefficientMidterm,
      coefficientExam,
    });
    res.status(201).json(discipline);
  },

  async update(req, res) {
    const { name, teacherId, coefficientMidterm, coefficientExam } = req.body;
    const discipline = await Discipline.findByPk(req.params.id);
    if (!discipline)
      return res.status(404).json({ error: "Discipline not found" });

    await discipline.update({
      name,
      teacherId,
      coefficientMidterm,
      coefficientExam,
    });
    res.json(discipline);
  },

  async remove(req, res) {
    const discipline = await Discipline.findByPk(req.params.id);
    if (!discipline)
      return res.status(404).json({ error: "Discipline not found" });

    await discipline.destroy();
    res.json({ message: "Discipline deleted" });
  },
};
