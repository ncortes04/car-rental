const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')

const {
    addCar,
    updateCar,
    getCarById,
    deleteCar,
    getAllCars
} = require('../controllers/api/carControllers');

router.route('/car').post(authMiddleware, addCar).delete(authMiddleware , deleteCar).get(getAllCars)
router.route('/car/:id').post(getCarById)


module.exports = router
