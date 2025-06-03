"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      Teacher.hasMany(models.Discipline, { foreignKey: "teacherId" });
    }
  }
  Teacher.init(
    {
      lastName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      faculty: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Teacher",
    }
  );
  return Teacher;
};
