const router = require("express").Router()
const productController = require('../controllers/products')

// Product route
router.get('/all', productController.getAllProducts)

router.get('/:productID', productController.getProductById)

module.exports = router