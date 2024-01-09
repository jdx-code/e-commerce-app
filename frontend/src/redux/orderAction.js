import { ORDER_ITEMS } from './constant'

export const proceedToPayment = (totalAmount, itemsArray) => {

    console.warn("proceedToPayment action", totalAmount, itemsArray)

    return {
        type: ORDER_ITEMS,       
        payload: { totalAmount, itemsArray}
    }       
    
}