'use strict';

const { readExcelCategoryDeseases } = require("../../helpers/readExcel");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('CategoryDeseases', readExcelCategoryDeseases())
     /* return queryInterface.bulkInsert('CategoryDeseases', [
      {
        Nombre: "Cabeza",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: "Garganta",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: "Parte Inferior",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: "Parte Superior",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: "Piel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: "Secciones Corporales",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]) */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('CategoryDeseases', null, {});

  }
};
