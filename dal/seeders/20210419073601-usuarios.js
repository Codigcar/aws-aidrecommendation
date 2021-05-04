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
     return queryInterface.bulkInsert('Users',[
       // doctor por default
       {
        id : 1,
        Usuario : 'testAdmin',
        Correo : 'testAdmin@gmail.com',
        Contrasenia : 'testAdmin',
        Rol : 3,
        PalabraSecreta : 'testAdmin',
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
     await queryInterface.bulkDelete('Users', null, {});

  }
};