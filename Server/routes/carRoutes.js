const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')

const {
    addCar,
    updateCar,
    deleteCar
} = require('../controllers/api/carControllers');

router.route('/car').post(authMiddleware, addCar).delete(authMiddleware , deleteCar)

module.exports = router
