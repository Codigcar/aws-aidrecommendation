'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Deficits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TipoDeficit: {
        type: Sequelize.STRING
      },
      Deficit: {
        type: Sequelize.STRING
      },
      EdadSufrioEnfermedad: {
        type: Sequelize.STRING
      },
      Cronico: {
        type: Sequelize.STRING
      },
      Detalles: {
        type: Sequelize.STRING
      },
      medicalHistoryId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"MedicalHistories",
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
    await queryInterface.dropTable('Deficits');
  }
};