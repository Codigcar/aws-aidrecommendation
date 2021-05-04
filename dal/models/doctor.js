'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.belongsTo(models.User,{
        as: "User"
      });

      Doctor.hasMany(models.MedicalConsultation,{
        foreignKey:"doctorId",
        as:"MedicalConsultations"
      });

    }
  };
  Doctor.init({
    Nombre: DataTypes.STRING,
    DNI: DataTypes.STRING,
    Sexo: DataTypes.STRING,
    Apellido: DataTypes.STRING,
    Edad: DataTypes.STRING,
    Especialidad: DataTypes.STRING,
    Colegiatura: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    PromedioPuntuacion: DataTypes.INTEGER,
    Direccion: DataTypes.STRING,
    Telefono: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};