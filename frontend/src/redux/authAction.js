import { SET_LOGIN, LOGOUT } from './constant'

export const setLoginToken = (data) => {

    console.warn("action --> the login token is = ", data)

    return {
        type: SET_LOGIN,
        data: data
    }           
}

export const logout = (data) => {

    // console.warn("action", data)

    return {
        type: LOGOUT,
        data: data
    }       
    
}