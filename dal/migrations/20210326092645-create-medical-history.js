'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MedicalHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // TipoDeficit: {
      //   type: Sequelize.STRING
      // },
      // Deficit: {
      //   type: Sequelize.STRING
      // },
      // Enfermedad: {
      //   type: Sequelize.STRING
      // },
      // MedicacionPrescribida: {
      //   type: Sequelize.STRING
      // },
      // Peso: {
      //   type: Sequelize.STRING
      // },
      // Estatura: {
      //   type: Sequelize.STRING
      // },
      // Vacuna: {
      //   type: Sequelize.STRING
      // },
      patientId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"Patients",
          key:"id"
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MedicalHistories');
  }
};