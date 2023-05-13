const sequelize = require('../config/connection');
const { Car, User, Reviews } = require('../models');
const bcrypt = require('bcrypt')
const carData = require('./carData.json');
const userData = require('./userData.json');
const reviewData = require('./reviewData.json')

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Car.bulkCreate(carData);
    const hashedUsers = userData.map((user) => ({
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      }));
    
      await User.bulkCreate(hashedUsers);
      await Reviews.bulkCreate(reviewData);

    console.log('Database seeded successfully.');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
