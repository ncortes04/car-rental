const Purchase = require('../../models/Purchases');

module.exports = {
    async purchaseCar({user = null, body}, res) {
        try {
            const buyerName = user.name
            const {carId} = body
            const purchase = await Purchase.create({
                carId,
                buyerName,
                purchaseDate: new Date()
              });       
            return res.status(201).json({ purchase });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
          }
      },
      async getPurchases({user = null}, res) {
        try {
            const allPurchases = await Purchase.findAll()
            res.status(200).json({allCars});
          } catch (err) {
            console.error(err);
          }
      }
}
