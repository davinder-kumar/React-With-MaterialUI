import * as actionTypes from '../../redux-store/actionTypes'

const initialState = {
    loading: false,
    userId: null,
    token: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SIGNIN:
            return state;
            default :
            return state
    }
}
export default AuthReducer