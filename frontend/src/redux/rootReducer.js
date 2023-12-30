import { combineReducers } from 'redux'
import { cartData } from './cartReducer'
import { authData } from './authReducer'
import { orderData } from './orderReducer'

export default combineReducers({
    cartData: cartData,
    authData: authData,
    orderData: orderData,
})