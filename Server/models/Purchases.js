const { Model, DataTypes } = require('sequelize');
const Car = require('./Car');
const sequelize = require('../config/connection');

class Purchase extends Model {}

Purchase.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'purchase',
  }
);

Purchase.belongsTo(Car);

module.exports = Purchase;
