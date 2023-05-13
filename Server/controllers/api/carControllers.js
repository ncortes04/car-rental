const express = require('express');
const { Car, Reviews, User } = require('../../models');
const Bookings = require('../../models/Bookings');
const Purchase = require('../../models/Purchases');
const sequelize = require('../../config/connection')

module.exports = {
// Create a car /car
  async addCar(req, res) {
    try {
      const car = await Car.create(req.body);
      res.status(201).json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
},
// Delete a car / car/:id
async deleteCar(req, res) {
    try {
      const car = await Car.findByPk(req.body.car_id);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      await car.destroy();
      res.status(204).json({ message: 'Sucessfully Deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
  // Update a car '/cars/:id'
async updateCar(req, res) {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    await car.update(req.body);
    res.status(200).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
},
async getCarById ({params}, res) {
  try {
    const car = await Car.findByPk(params.id, {
      include: [
        {
          model: Reviews,
          attributes: ['id', 'comment', 'createdAt', 'rating', 'header'],
          include: {model: User, attributes: ['name', 'id']}
        }
      ]
    });
    res.status(200).json({car});
  } catch (err) {
    console.error(err);
  }
},
async getCarBookings ({body}, res) {
  try {
    const car = await Car.findByPk(body.car_id, {
      include: [
        {
          model: Bookings,
          attributes: ['bookedDays'],
        },
      ],
    });
    const bookedDays = car.Bookings.map(booking => booking.bookedDays).flat();
    res.status(200).json({bookedDays});
  } catch (err) {
    console.error(err);
  }
},
async getAllCars ({params}, res) {
  try {
    const allCars = await Car.findAll()
    res.status(200).json({allCars});
  } catch (err) {
    console.error(err);
  }
},
async getPopularCars (req, res) {
  try {
    const popularCars = await Purchase.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('carId')), 'purchaseCount'],
        // Include other desired attributes from the Car model here
      ],
      include: [
        {
          model: Car,
        },
      ],
      group: ['carId'],
      order: [[sequelize.literal('purchaseCount'), 'DESC']],
      limit: 4,
    });

    // Remove the purchaseCount attribute before sending the response
    const cars = popularCars.map((carData) => carData.Car);
    res.status(200).json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
}
