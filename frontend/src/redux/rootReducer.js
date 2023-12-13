import { combineReducers } from 'redux'
import { cartData } from './reducer'
import { authData } from './authReducer'

export default combineReducers({
    cartData: cartData,
    authData: authData
})