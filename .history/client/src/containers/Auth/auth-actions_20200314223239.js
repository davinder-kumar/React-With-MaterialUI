import * as actionTypes from '../../redux-store/actionTypes'

export const authSignupInit = (payload) => {
    return {
        type: actionTypes.AUTH_SIGNUP_INIT,
        formData: payload
    }
}
export const authSignupSuccess = (response) => {
    return {
        type: actionTypes.AUTH_SIGNUP_SUCCESS,
        formData: payload
    }
}
export const authSignupFail = () => {
    return {
        type: actionTypes.AUTH_SIGNUP_FAIL,
    }
}