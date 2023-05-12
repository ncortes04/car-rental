const sequelize = require('../config/connection');
const { Car } = require('../models');

const carData = require('./carData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Car.bulkCreate(carData);

  process.exit(0);
};

seedDatabase();
