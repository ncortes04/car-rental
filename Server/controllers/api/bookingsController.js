// Create a booking for a car
const express = require('express');
const { Car } = require('../../models');
const Bookings = require('../../models/Bookings');


module.exports = {
    //'/cars/:carId/bookings
    async createBooking ({body, params}, res) {
        try {
          // Get the car with the specified ID
          const car = await Car.findByPk(params.carId);
          if (!car) {
            return res.status(404).json({ message: 'Car not found' });
          }      
          const {startDate, endDate, bookedDays} = body
          const {carId} = params
          let bookingArr = bookedDays
          // Create a new booking with the specified dates
          const booking = await Bookings.create({
            car_id: carId,
            startDate: startDate,
            endDate: endDate,
            bookedDays: bookingArr,
          });
      
          return res.status(201).json({ booking });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      },
      async deleteBooking ({body}, res) {
        try {
          // Get the booking with the specified ID
          const booking = await Bookings.findByPk(body.bookingId);
          if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
          }
          // Delete the booking
          await booking.destroy();
          return res.status(200).json({ message: 'Booking deleted successfully' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      }
}

