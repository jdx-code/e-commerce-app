import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, INCREASE_QTY, DECREASE_QTY, REMOVE_ALL_QTY } from './constant'
 
export const cartData = (data = [], action) => {

    // if(action.type === ADD_TO_CART) {
    //     console.warn("reducer called", action)
    //     return action.data
    // } else {
    //     return "No action matched.."
    // }

    switch (action.type) {           
        case ADD_TO_CART:
            console.warn('ADD_TO_CART action type called', action)
            return [action.data, ...data]

        case REMOVE_FROM_CART:
            console.warn('REMOVE_FROM_CART action type called', action)
            data.length = data.length ? data.length - 1 : []
            return [...data]

        case EMPTY_CART:
            console.warn('EMPTY_CART action type called', action)
            data = []
            return [...data]

        case INCREASE_QTY:
            console.warn('INCREASE_QTY action type called', action)     
            const productIdForInc = action.payload.productId;            
            let copiedObjForInc
            const foundObjForInc = data.flat().find((obj) => obj._id === productIdForInc);
            

            if (foundObjForInc) {
                
                copiedObjForInc = { ...foundObjForInc };
            
                console.log(`Found object with id `, copiedObjForInc);
            } else {
                console.log(`Array does not contain an object with id ${targetId}`);
            }

            return [...data, copiedObjForInc]
        
        case DECREASE_QTY:
            console.warn('INCREASE_QTY action type called', action)     
            const productIdForDec = action.payload.productId;            
                        
            const foundObjForDec = data.flat().filter((obj) => obj._id === productIdForDec);
            const foundObjNotForDec = data.flat().filter((obj) => obj._id !== productIdForDec);
                
            foundObjForDec.pop()
            
            return [...foundObjForDec, ...foundObjNotForDec]           

        case REMOVE_ALL_QTY:
            console.warn('REMOVE_ALL_QTY action type called', action)     
            const productIdForDel = action.payload.productId;                                    
            
            const foundObjNotForDel = data.flat().filter((obj) => obj._id !== productIdForDel);

            return [...foundObjNotForDel]
        
        default:
            return data
                
    }

}