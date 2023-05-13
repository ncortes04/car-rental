const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')
const {
    createUser,
    login,
    getSingleUser,
} = require('../controllers/api/userControllers');

router.route('/me').post(authMiddleware, getSingleUser)
router.route('/login').post(login)
router.route('/signup').post(createUser);

module.exports = router