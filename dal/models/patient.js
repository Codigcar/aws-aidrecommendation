'use strict';
const {
  Model
} = require('sequelize');
const User = require('../../domain/models/user');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
   
    static associate(models) {

      // Patient 1 - * MedicalHistories
      Patient.hasMany(models.MedicalHistory,{
        foreignKey:"patientId",
        as:"medicalHistories"
      });

      // Patient 1 - 1 User
      Patient.belongsTo(models.User,{
        as: "User"
      });
    }
  };
  Patient.init({
    DNI: DataTypes.STRING,
    Sexo: DataTypes.STRING,
    Apellido: DataTypes.STRING,
    Nombre: DataTypes.STRING,
    Edad: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    Direccion: DataTypes.STRING,
    Telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};