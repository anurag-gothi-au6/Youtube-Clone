import {SET_USER, TOGGLE_AUTH_STATE, LOGOUT_USER} from '../actionTypes'
export const setUser = user =>{
    return{
        type:SET_USER,
        payload:user
    }
}

export const toggleIsAuthenticating = user =>{
    return{
        type:TOGGLE_AUTH_STATE
    }
}
export const logoutUser = ()=>{
    return {
        type:LOGOUT_USER
    }
}