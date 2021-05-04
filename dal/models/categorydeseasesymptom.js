'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryDeseaseSymptom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CategoryDeseaseSymptom.init({
    categoryDeseaseId: DataTypes.INTEGER,
    CategoryDesease: DataTypes.STRING,
    symptomId: DataTypes.INTEGER,
    Symptom: DataTypes.STRING,
    peso: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CategoryDeseaseSymptom',
  });
  return CategoryDeseaseSymptom;
};