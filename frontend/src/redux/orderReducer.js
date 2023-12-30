import { ORDER_ITEMS } from './constant'
 
export const orderData = (data = [], action) => {

    switch (action.type) {           
                
        case ORDER_ITEMS:
            console.warn('ORDER_ITEMS action type called', action)            
            return {
                totalAmount: action.payload.totalAmount,
                itemsArray: action.payload.itemsArray,               
            };
        
        default:
            return data
                            
    }

}