const router = require('express').Router();
const {authMiddleware} = require('../utils/AUTH')

const {
    getPurchases,
    getTop5,
    getRecentPurchases
} = require('../controllers/api/adminTools')

router.route('/purchase').post(authMiddleware, getPurchases)
router.route('/top').post(authMiddleware, getTop5)
router.route('/recent').post(authMiddleware, getRecentPurchases )

module.exports = router
