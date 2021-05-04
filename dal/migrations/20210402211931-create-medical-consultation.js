'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MedicalConsultations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Dolencia: {
        type: Sequelize.STRING
      },
      Estado: {
        type: Sequelize.INTEGER,
        default: 0
      },
      DoctorName: {
        type: Sequelize.STRING
      },
      Prescripcion: {
        type: Sequelize.STRING
      },
      Observaciones: {
        type: Sequelize.STRING
      },
      Paciente: {
        type: Sequelize.STRING
      },
      PacienteApellido: {
        type: Sequelize.STRING
      },
     
      PacienteId: {
        type: Sequelize.INTEGER
      },
      Puntuacion: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      medicalHistoryId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"MedicalHistories",
          key:"id"
        }
      },
      doctorId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"Doctors",
          key:"id"
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MedicalConsultations');
  }
};