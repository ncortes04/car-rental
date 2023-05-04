const { Car, User, Reviews} = require('../models');
const withAuth = require('../utils/auth');
//this is the ge route to get all the users
module.exports = {
  // Get a car '/cars/:id', 
  async getSingleCar(req, res){
    try {
      const car = await Car.findByPk(req.params.id);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      res.status(200).json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
}