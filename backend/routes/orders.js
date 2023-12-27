const router = require("express").Router()
const paymentController = require('../controllers/payments')

// Product route
router.patch('/payments', paymentController.setPayment)

module.exports = router