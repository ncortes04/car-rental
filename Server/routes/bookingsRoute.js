const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')

const {
 createBooking,
 deleteBooking,
} = require('../controllers/api/bookingsController');
const {
    getCarBookings
} = require('../controllers/api/carControllers')

router.route('/bookings/:carId').post(authMiddleware, createBooking)
router.route('/bookings').delete(authMiddleware, deleteBooking).post(authMiddleware, getCarBookings)



module.exports = router
