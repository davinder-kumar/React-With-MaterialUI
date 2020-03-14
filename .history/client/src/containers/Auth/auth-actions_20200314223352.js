import * as actionTypes from '../../redux-store/actionTypes'

export const authSignupInit = (payload) => {
    return {
        type: actionTypes.AUTH_SIGNUP_INIT,
        formData: payload
    }
}
export const authSignupSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SIGNUP_SUCCESS,
        formData: response
    }
}
export const authSignupFail = () => {
    return {
        type: actionTypes.AUTH_SIGNUP_FAIL,
    }
}