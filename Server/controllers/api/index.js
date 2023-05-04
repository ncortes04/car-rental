
const { createReview,deleteReview, getAllReviews } = require('./reviewControllers')



router.route('/createpost').post(authMiddleware, addCar);
router.route('/deletepost').delete(authMiddleware, deleteCar)

module.exports = router;
