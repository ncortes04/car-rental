const router = require('express').Router();
const {authMiddleware} = require('../../utils/AUTH')
const {
    createUser,
    login,
    getSingleUser,
} = require('./userRoutes');
const {
    addCar,
    updateCar,
    deleteCar
} = require('./carRoutes');
const { createReview,deleteReview, getAllReviews } = require('./reviewRoutes')

// router.route('/comment').post(isAuth, addComment)
// router.route('/post').post(isAuth, createPost)
router.route('/login').post(login)
router.route('/signup').post(createUser);
router.route('/comment').post(authMiddleware, createReview).delete(authMiddleware, deleteReview);
router.route('/createpost').post(authMiddleware, addCar);
router.route('/me').get(authMiddleware, getSingleUser)
router.route('/deletepost').delete(authMiddleware, deleteCar)

module.exports = router;
