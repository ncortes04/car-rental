const Purchase = require('../../models/Purchases');
const Car = require('../../models/Car')
const sequelize = require('../../config/connection')
module.exports = {
      async getPurchases({user = null}, res) {
        try {
            const allPurchases = await Purchase.findAll()
            res.status(200).json({allPurchases});
          } catch (err) {
            console.error(err);
          }
      },
      async getTop5({ user = null }, res) {
        try {
          const popularCars = await Purchase.findAll({
            attributes: [
              [sequelize.fn('COUNT', sequelize.col('carId')), 'purchaseCount'],
            ],
            group: ['carId'],
            order: [[sequelize.literal('purchaseCount'), 'DESC']],
            limit: 5,
            include: [
              {
                model: Car,
                attributes: ['id', 'make', 'model', 'dailyPrice', 'type',],
              },
            ],
          });
          const limit = Math.min(popularCars.length, 5); // Limit to the minimum of 5 or the actual count of purchased cars

          const limitedPopularCars = popularCars.slice(0, limit); // Get the limited number of popular cars
      
          const sum = limitedPopularCars.map(rank => (rank.Car.dailyPrice * rank.dataValues.purchaseCount));
      
          console.log(sum);
      
          res.status(200).json({ popularCars: limitedPopularCars, sum });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
      async getRecentPurchases(req, res) {
        try {
          const recentPurchases = await Purchase.findAll({
            include: [Car],
            order: [['createdAt', 'DESC']],
            limit: 5,
          });
      
          res.status(200).json({ recentPurchases });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      }
}
