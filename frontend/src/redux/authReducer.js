import { SET_LOGIN, LOGOUT } from './constant'
 
export const authData = (data = [], action) => {

    switch (action.type) {           
        
        case SET_LOGIN :
            console.warn('SET_LOGIN action type called', action)
            return [action.data]   

        case LOGOUT :
            console.warn('LOGOUT action type called', action)
            return []  
        
        default:
            return data
                
    }

}