'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deficit extends Model {
    static associate(models) {

      // Deficit 1 - 1 MedicalHistories
      Deficit.belongsTo(models.MedicalHistory, {
        as: "MedicalHistory"
      });

    }
  };
  Deficit.init({
    TipoDeficit: DataTypes.STRING,
    Deficit: DataTypes.STRING,
    EdadSufrioEnfermedad: DataTypes.STRING,
    Cronico: DataTypes.STRING,
    Detalles: DataTypes.STRING,
    medicalHistoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deficit',
  });
  return Deficit;
};