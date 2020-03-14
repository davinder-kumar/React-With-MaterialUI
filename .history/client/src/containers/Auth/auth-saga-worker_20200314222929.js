import { select, put } from 'redux-saga/effects'
import axios from '../../axios-auth'
import * as actionList from '../../redux-store/actionsList'
export function* authSignup(action) {
    try {
        const response = yield axios.post('/users', action.formData);
        const userId = response.user._id
        const token = response.user.token
        
        yield put(actionList.authSignupSuccess(response)) 
    } catch (error) {
        yield put(actionList.authSignupFail()) 
    }
}