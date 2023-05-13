const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Car = require('./Car')
class Reviews extends Model {}

Reviews.init ({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  header: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  car_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modeName: 'reviews'
}

);
Reviews.addHook('afterCreate', async (review) => {

  const car = await Car.findByPk(review.car_id);
  const numReviews = await Reviews.count({ where: { car_id: review.car_id } });
  const averageRating = await Reviews.aggregate('rating', 'AVG', { where: { car_id: review.car_id } });

  await car.update({ averageRating, ratingCount: numReviews });
});
module.exports = Reviews;