const router = require("express").Router()
const { userRegister, userLogin, userAuth, checkRole, serializeUser } = require('../utils/Auth')
const adminController = require('../controllers/Auth/admin')
const customerController = require('../controllers/Auth/customer')
const upload = require('../middleware/media_upload/multer')

// Admin registration route
router.post('/register-admin', adminController.registerAdmin)

// Customer registration route
router.post('/register-customer', customerController.registerCustomer)

// Admin login route
router.post('/login-admin', adminController.loginAdmin)

// Customer login route
router.post('/login-customer', customerController.loginCustomer)

// Profile route
router.get('/profile', userAuth, async(req, res) => {
    return res.json(serializeUser(req.user))
})

// Admin PROTECTED route
router.get('/admin-protected', userAuth, checkRole(['admin']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

router.post('/admin-protected/add-product', userAuth, checkRole(['admin']), upload.single("file"), adminController.addProduct)

// Customer PROTECTED route
router.get('/customer-protected', userAuth, checkRole(['customer']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

module.exports = router