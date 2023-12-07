const Product = require("../models/Product");

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {            
            res.status(500).json({ error: 'Internal Server Error' });
        }        
    },

    getProductById: async (req, res) => {
        try {
            const products = await Product.find({ _id: req.params.productID });
            res.json(products);
        } catch (err) {            
            res.status(500).json({ error: 'Internal Server Error' });
        }        
    }

};