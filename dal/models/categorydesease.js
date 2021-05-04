'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryDesease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CategoryDesease.hasMany(models.Desease,{
        foreignKey:"GrupoId"
      })
    }
  };
  CategoryDesease.init({
    Nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoryDesease',
  });
  return CategoryDesease;
};