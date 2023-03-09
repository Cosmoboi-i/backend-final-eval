'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      content_type.hasMany(models.collection, { foreignKey: 'content_type_id' })
    }
  }
  content_type.init({
    name: DataTypes.STRING,
    structure: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'content_type',
  });
  return content_type;
};