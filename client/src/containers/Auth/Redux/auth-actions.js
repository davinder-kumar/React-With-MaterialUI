import * as actionTypes from '../../../redux-store/actionTypes'

export const authSignupInit = (payload) => {
    return {
        type: actionTypes.AUTH_SIGNUP_INIT,
        formData: payload
    }
}
export const authSignupSuccess = () => {
    return {
        type: actionTypes.AUTH_SIGNUP_SUCCESS,
    }
}
export const authSignupFail = () => {
    return {
        type: actionTypes.AUTH_SIGNUP_FAIL,
    }
}

export const authSignInInit = (payload) => {
    return {
        type: actionTypes.AUTH_SIGNIN_INIT,
        formData: payload
    }
}
export const authSigninSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SIGNIN_SUCCESS,
        token: token,
        userId: userId
    }
}