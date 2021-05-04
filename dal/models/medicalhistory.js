'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalHistory extends Model {
    
    static associate(models) {

      // MedicalHistories 1 - 1 Patient
      MedicalHistory.belongsTo(models.Patient,{
        as: "Patient"
      });

      // MedicalHistories 1 - * Deficit 
      MedicalHistory.hasMany(models.Deficit,{
        foreignKey:"medicalHistoryId",
        as:"Deficits"
      });

      MedicalHistory.hasMany(models.MedicalConsultation,{
        foreignKey:"medicalHistoryId",
        as:"MedicalConsultations"
      });
    }
  };
  MedicalHistory.init({
    // TipoDeficit: DataTypes.STRING,
    // Deficit: DataTypes.STRING,
    // Enfermedad: DataTypes.STRING,
    // MedicacionPrescribida: DataTypes.STRING,
    // Peso: DataTypes.STRING,
    // Estatura: DataTypes.STRING,
    // Vacuna: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MedicalHistory',
  });
  return MedicalHistory;
};