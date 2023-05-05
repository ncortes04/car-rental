const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')

const {
 createBooking,
 deleteBooking
} = require('../controllers/api/bookingsController');

router.route('/bookings/:carId').post(authMiddleware, createBooking)
router.route('/bookings').delete(authMiddleware, deleteBooking)



module.exports = router
