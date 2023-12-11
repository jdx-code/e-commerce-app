const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productDescription: {
            type: String,
            required: true
        },
        productImage: {
            type: String,            
        },
        productPrice: {
            type: Number,
            required: true            
        },
        productFeatures: {
            type: Array,            
        },
        productColors: {
            type: Array,            
        },
        cloudinary_id: {
            type: String,
        }
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("products", ProductSchema)