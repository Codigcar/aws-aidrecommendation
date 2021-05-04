'use strict';

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
     return queryInterface.bulkInsert('Patients',[
       {
        id : 1,
        userId : 1,
        DNI : '12345678',
        Sexo : 'Masculino',
        Apellido : 'testAdminApellido',
        Nombre : 'testAdminNombre',
        Edad : '44',
        createdAt: new Date(),
        updatedAt: new Date()
       }
     ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Patients', null, {});

  }
};