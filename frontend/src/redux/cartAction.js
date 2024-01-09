import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, INCREASE_QTY, DECREASE_QTY, REMOVE_ALL_QTY } from './constant'

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

export const increaseQty = (productId) => {

    console.warn("Increase Qty action", productId)
    
    return {
        type: INCREASE_QTY,
        payload: { productId }
    }       
    
}

export const decreaseQty = (productId) => {

    console.warn("Decrease Qty action", productId)

    return {
        type: DECREASE_QTY,
        payload: { productId }
    }       
    
}

export const removeAllQty = (productId) => {

    console.warn("Remove All Qty action", productId)

    return {
        type: REMOVE_ALL_QTY,
        payload: { productId }
    }       
    
}