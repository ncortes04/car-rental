const { Model, DataTypes } = require('sequelize');
const sequelize = require('your-sequelize-instance');

class Purchase extends Model {}

Purchase.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  buyerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  purchaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'purchase'
});

module.exports = Purchase;