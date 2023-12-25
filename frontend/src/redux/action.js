import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, PROCEED_TO_PAYMENT } from './constant'

export const addToCart = (data) => {

    console.warn("add to cart action", data)

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

export const proceedToPayment = (totalAmount, itemsArray) => {

    console.warn("proceedToPayment action", totalAmount, itemsArray)

    return {
        type: PROCEED_TO_PAYMENT,
        payload: { totalAmount, itemsArray }
    }       
    
}