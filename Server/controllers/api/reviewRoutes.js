const express = require('express');
const router = express.Router();
const { Reviews, User, Car } = require('../../models');


module.exports = {
// Create a new review for a car /reviews
async createReview(req, res){
  try {
    const { user_id, car_id, rating, comment } = req.body;

    const review = await Review.create({
      user_id,
      car_id,
      rating,
      comment
    });

    res.status(201).json({ review });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create review' });
  }
},
// Delete a review by its ID'/reviews/:id'
async deleteReview(req, res){
  try {
    const review = await Review.findByPk(req.params.id);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    await review.destroy();

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete review' });
  }
},
// Get all reviews for a car '/reviews/:carId'
async getAllReviews(req, res) {
  try {
    const reviews = await Review.findAll({
      where: { car_id: req.params.carId },
      include: [{ model: User, attributes: ['id', 'username'] }]
    });

    res.json({ reviews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
},
}





