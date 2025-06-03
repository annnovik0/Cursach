"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assessment extends Model {
    static associate(models) {
      Assessment.belongsTo(models.Student, { foreignKey: "studentId" });
      Assessment.belongsTo(models.Discipline, { foreignKey: "disciplineId" });
    }
  }
  Assessment.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      disciplineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      midtermGrade: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      examGrade: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      finalGrade: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      isAbsent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Assessment",
    }
  );
  return Assessment;
};
