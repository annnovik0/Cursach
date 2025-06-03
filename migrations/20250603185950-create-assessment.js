"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Assessments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Students", key: "id" },
        onDelete: "CASCADE",
      },
      disciplineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Disciplines", key: "id" },
        onDelete: "CASCADE",
      },
      midtermGrade: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      examGrade: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      finalGrade: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      isAbsent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Assessments");
  },
};
