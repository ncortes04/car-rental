const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          make: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          model: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          year: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          color: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dailyPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          transmission: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false
          },
          averageRating: {
            type: DataTypes.FLOAT,
            defaultValue: 0
          },
          ratingCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
          },
          tank: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "N/A"
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now'),
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modeName: 'car'
    }
);

module.exports = Car;