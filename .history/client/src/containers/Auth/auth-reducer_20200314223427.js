import * as actionTypes from '../../redux-store/actionTypes'

const initialState = {
    loading: false,
    userId: null,
    token: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SIGNUP_INIT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                userId: action.userId,
                token: action.token
            }
        case actionTypes.AUTH_SIGNUP_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
export default AuthReducer