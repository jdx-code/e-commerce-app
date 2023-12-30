const User = require("../models/User");

module.exports = {
    setPayment: async (req, res) => {
        try {

            // console.log(req.body)

            const { formData, cart, user_id } = req.body;
                        
            const user = await User.findOne({ _id: user_id });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            user.cart = [...user.cart, ...cart];
            
            await user.save();

            // Send a response back to the client
            res.status(200).json({ message: 'Payment successful. Cart updated.' });
            
            
        } catch (err) {            
            res.status(500).json({ error: 'Internal Server Error' });
        }        
    },
};