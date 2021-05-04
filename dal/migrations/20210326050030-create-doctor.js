'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      DNI: {
        type: Sequelize.STRING
      },
      Sexo: {
        type: Sequelize.STRING
      },
      Apellido: {
        type: Sequelize.STRING
      },
      Edad: {
        type: Sequelize.STRING
      },
      Especialidad: {
        type: Sequelize.STRING
      },
      Colegiatura: {
        type: Sequelize.STRING
      },
      PromedioPuntuacion: {
        type: Sequelize.INTEGER
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"Users",
          key:"id"
        }
      },
      // email: {
      //   type: Sequelize.STRING
      // },
      // user: {
      //   type: Sequelize.STRING
      // },
      // password: {
      //   type: Sequelize.STRING
      // },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctors');
  }
};