const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bookings extends Model {}


Bookings.init ({
  rentalStartDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  rentalEndDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modeName: 'bookings'
}
);



module.exports = Bookings;