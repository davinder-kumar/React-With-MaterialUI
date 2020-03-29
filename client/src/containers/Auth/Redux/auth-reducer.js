import * as actionTypes from '../../../redux-store/actionTypes'

const initialState = {
    loading: false,
    userId: null,
    token: null,
    isError: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SIGNUP_INIT:
            return {
                ...state,
                loading: true,
                isError: false
            }
        case actionTypes.AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.AUTH_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userId: action.userId,
                token: action.token
            }
        case actionTypes.AUTH_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                isError: true
            }
        default:
            return state
    }
}
export default AuthReducer