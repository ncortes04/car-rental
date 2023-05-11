const express = require('express');
const { Car, Reviews, User } = require('../../models');
const Bookings = require('../../models/Bookings');


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
      const car = await Car.findByPk(req.body.id);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      await car.destroy();
      res.status(204).end();
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
          attributes: ['bookedDays']
        },]
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
}
