import { SET_USER, TOGGLE_AUTH_STATE, LOGOUT_USER } from '../actionTypes'
const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticating: false
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER:
            localStorage.setItem('user', JSON.stringify(payload))
            return { ...state, user: payload }
        case TOGGLE_AUTH_STATE:
            return { ...state, isAuthenticating: !state.isAuthenticating }
        case LOGOUT_USER:
            localStorage.removeItem('user')
            return {...state,user:null}
        default:
            return state
    }
}
export default userReducer