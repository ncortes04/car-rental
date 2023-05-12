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
              'car_id',
              [sequelize.fn('COUNT', sequelize.col('car_id')), 'purchaseCount'],
            ],
            group: ['car_id'],
            order: [[sequelize.literal('purchaseCount'), 'DESC']],
            limit: 5,
            include: [
              {
                model: Car,
                attributes: ['id', 'make', 'model', 'dailyPrice', 'type'],
              },
            ],
          });
          const sum = popularCars.map(rank => (rank.Car.dailyPrice * rank.dataValues.purchaseCount))     
      
          res.status(200).json({ popularCars, sum });
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
