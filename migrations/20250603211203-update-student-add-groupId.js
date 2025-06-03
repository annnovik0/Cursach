"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Добавляем новое поле groupId
    await queryInterface.addColumn("Students", "groupId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Groups",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    // Восстанавливаем строковое поле group
    await queryInterface.addColumn("Students", "group", {
      type: Sequelize.STRING,
    });

    // Удаляем поле groupId
    await queryInterface.removeColumn("Students", "groupId");
  },
};
