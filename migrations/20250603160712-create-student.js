'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastName: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      hasBenefit: {
        type: Sequelize.BOOLEAN
      },
      status: {
        type: Sequelize.STRING
      },
      dormitory: {
        type: Sequelize.STRING
      },
      faculty: {
        type: Sequelize.STRING
      },
      specialty: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.INTEGER
      },
      educationForm: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      averageGrade: {
        type: Sequelize.FLOAT
      },
      scholarship: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};