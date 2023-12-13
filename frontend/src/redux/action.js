import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'

export const addToCart = (data) => {

    // console.warn("action", data)

    return {
        type: ADD_TO_CART,
        data: data
    }       
    
}

export const removeFromCart = (data) => {

    // console.warn("action", data)

    return {
        type: REMOVE_FROM_CART,
        data: data
    }       
    
}

export const emptyCart = () => {

    // console.warn("action", data)

    return {
        type: EMPTY_CART,        
    }       
    
}