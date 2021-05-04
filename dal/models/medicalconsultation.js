'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalConsultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MedicalConsultation.belongsTo(models.MedicalHistory, {
        as: "MedicalHistory"
      });

      MedicalConsultation.belongsTo(models.Doctor, {
        as: "Doctor"
      });
    }
  };
  MedicalConsultation.init({
    /* Desease: DataTypes.STRING,
    deseaseId: DataTypes.INTEGER,
    CategoryDesease: DataTypes.STRING,
    categoryDeseaseId: DataTypes.INTEGER, */

    Dolencia : DataTypes.STRING,
    Estado : DataTypes.INTEGER,                   
    DoctorName :  DataTypes.STRING,
    Prescripcion :  DataTypes.STRING, 
    Observaciones :  DataTypes.STRING, 
    Paciente :  DataTypes.STRING, 
    PacienteApellido :  DataTypes.STRING, 
    PacienteId :  DataTypes.INTEGER, 
    Puntuacion :  DataTypes.INTEGER, 
    // Preguntas : DataTypes.ARRAY, 
    
    medicalHistoryId: DataTypes.INTEGER,
    doctorId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MedicalConsultation',
  });
  return MedicalConsultation;
};