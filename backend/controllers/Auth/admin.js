const Product = require('../../models/Product')
const { userRegister, userLogin } = require('../../utils/Auth')
const cloudinary = require('../../middleware/media_upload/cloudinary')

module.exports = {
    registerAdmin : async(req, res) => {
        await userRegister(req.body, "admin", res)
    },
    loginAdmin : async(req, res) => {        
        await userLogin(req.body, "admin", res)
    },    

    addProduct : async(req, res) => {
        try{
                        
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "e-commerce-app"
            })
            const imageUrl = result.secure_url
            const cloudinaryId = result.public_id

            await Product.create({

                productName: req.body.productName,
                productDescription: req.body.productDescription,
                productImage: imageUrl,
                productPrice: req.body.productPrice,
                productFeatures: req.body.productFeatures,
                productColors: req.body.productColors,
                cloudinary_id: cloudinaryId

            })
            console.log('New product added by admin.')
        } catch (err){
            console.error(err)            
        }
    }
}


