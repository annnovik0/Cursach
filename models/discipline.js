"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discipline extends Model {
    static associate(models) {
      Discipline.belongsTo(models.Teacher, { foreignKey: "teacherId" });
    }
  }
  Discipline.init(
    {
      name: DataTypes.STRING,
      teacherId: DataTypes.INTEGER,
      coefficientMidterm: DataTypes.FLOAT,
      coefficientExam: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Discipline",
    }
  );
  return Discipline;
};
