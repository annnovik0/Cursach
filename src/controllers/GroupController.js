const { Group, Student } = require("../../models");

class GroupController {
  static async getAll(req, res) {
    try {
      const groups = await Group.findAll({
        include: { model: Student, as: "students" },
      });
      res.json(groups);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Ошибка при получении групп" });
    }
  }

  static async getById(req, res) {
    try {
      const group = await Group.findByPk(req.params.id, {
        include: { model: Student, as: "students" },
      });
      if (!group) return res.status(404).json({ message: "Группа не найдена" });
      res.json(group);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Ошибка при получении группы" });
    }
  }

  static async create(req, res) {
    try {
      const newGroup = await Group.create(req.body);
      res.status(201).json(newGroup);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Ошибка при создании группы" });
    }
  }

  static async update(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (!group) return res.status(404).json({ message: "Группа не найдена" });

      await group.update(req.body);
      res.json(group);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Ошибка при обновлении группы" });
    }
  }

  static async delete(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (!group) return res.status(404).json({ message: "Группа не найдена" });

      await group.destroy();
      res.json({ message: "Группа удалена" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Ошибка при удалении группы" });
    }
  }
}

module.exports = GroupController;
