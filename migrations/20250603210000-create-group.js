"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Groups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      faculty: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      specialty: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      course: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      budgetPlaces: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      dormPlaces: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Groups");
  },
};
