const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerCustomer : async(req, res) => {
        await userRegister(req.body, "customer", res)
    },
    loginCustomer : async(req, res) => {
        await userLogin(req.body, "customer", res)
    }
}