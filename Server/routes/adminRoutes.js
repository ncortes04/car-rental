const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')

const {
    purchaseCar,
    getPurchases
} = require('../controllers/api/adminTools')

router.route('/purchase').post(authMiddleware, purchaseCar).get(authMiddleware, getPurchases)

module.exports = router
