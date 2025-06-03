"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      // Ассоциация: у группы много студентов
      Group.hasMany(models.Student, { foreignKey: "groupId", as: "students" });
    }
  }

  Group.init(
    {
      name: DataTypes.STRING,
      faculty: DataTypes.STRING,
      specialty: DataTypes.STRING,
      course: DataTypes.INTEGER,
      budgetPlaces: DataTypes.INTEGER,
      dormPlaces: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Group",
    }
  );

  return Group;
};
