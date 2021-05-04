'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // User 1 - * Patients
      User.hasMany(models.Patient,{
        foreignKey:"userId",
        as:"Users"
      });

      // User 1 - * Doctors
      User.hasMany(models.Doctor,{
        foreignKey:"userId",
        as:"Doctors"
      });
    }
  };
  User.init({
    Usuario: DataTypes.STRING,
    Correo: DataTypes.STRING,
    Contrasenia: DataTypes.STRING,
    Rol: DataTypes.STRING,
    PalabraSecreta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};