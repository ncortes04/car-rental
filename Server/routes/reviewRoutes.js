const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')

const {
createReview,
deleteReview
} = require('../controllers/api/reviewControllers');

router.route('/review').post(authMiddleware, createReview).delete(authMiddleware , deleteReview)

module.exports = router
