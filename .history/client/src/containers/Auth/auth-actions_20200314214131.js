import * as actionTypes from '../../redux-store/actionTypes'

export const authSignupInit = (payload)=>{
    return  {
        type: actionTypes.AUTH_SIGNUP_INIT
    }
}