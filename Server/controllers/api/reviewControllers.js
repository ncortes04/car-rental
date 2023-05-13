const express = require('express');
const router = express.Router();
const { Reviews, User, Car } = require('../../models');


module.exports = {
// Create a new review for a car /reviews
async createReview({user = null, body}, res){
  try {
    const { car_id, rating, comment, header } = body;
    const car = await Car.findByPk(car_id);
    const {id} = user
    const review = await Reviews.create({
      user_id: id,
      car_id: car_id,
      rating: rating,
      comment: comment,
      header: header,
    });
    if (!car) {
      res.status(404).json({ message: 'Car not found' });
      return;
    }
    // const prevAverage = car.averageRating
    // const numReviews = car.ratingCount;
    // const averageRating = (prevAverage + rating) / (numReviews + 1)
   
    // await car.update({ averageRating: averageRating, ratingCount: numReviews + 1 });
    res.status(201).json({ review });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create review' });
  }
},
// Delete a review by its ID'/reviews/:id'
async deleteReview({user = null, body}, res){
  try {
    console.log(user)
    const review = await Reviews.findByPk(body.id);
    if(user.id !== review.user_id){
      return res.status(403).json({ error: 'Access Denied' });
    }
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
    const reviews = await Reviews.findAll({
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





