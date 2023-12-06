const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "customer",
            enum: ["admin", "customer", "seller"]
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }, 
        cart: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', 
            },
            quantity: {
                type: Number,
            }
        }],
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("users", UserSchema)