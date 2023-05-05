const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Car = require('../models/Car');
const dataTypes = require('sequelize/lib/data-types');

class Bookings extends Model {}


Bookings.init ({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  car_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bookedDays: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      const value = this.getDataValue('bookedDays');
      return value ? JSON.parse(value).split(',') : [];
    },
    set(value) {
      this.setDataValue('bookedDays', JSON.stringify(value));
    }
  }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modeName: 'bookings'
}
);


module.exports = Bookings;