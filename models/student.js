'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
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
    group: DataTypes.STRING,
    averageGrade: DataTypes.FLOAT,
    scholarship: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};