'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Foro.hasMany(models.Answer,{
        foreignKey:"foroId",
        as:"answers"
      });
    }
  };
  Foro.init({
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Foro',
  });
  return Foro;
};