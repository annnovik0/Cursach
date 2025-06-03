"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.Group, { foreignKey: "groupId", as: "group" });
    }
  }
  Student.init(
    {
      lastName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      hasBenefit: DataTypes.BOOLEAN,
      status: DataTypes.STRING,
      dormitory: DataTypes.STRING,
      faculty: DataTypes.STRING,
      specialty: DataTypes.STRING,
      course: DataTypes.INTEGER,
      educationForm: DataTypes.STRING,
      groupId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Groups",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      averageGrade: DataTypes.FLOAT,
      scholarship: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
