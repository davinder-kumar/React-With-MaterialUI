import { put } from 'redux-saga/effects'
import axios from '../../axios-auth'
import * as actionList from '../../redux-store/actionsList'
export function* authSignup(action) {
    try {
        const response = yield axios.post('/users', action.formData);
        const userId = yield response.data.user._id
        const token = yield response.data.token
        yield localStorage.setItem("token", token)
        yield localStorage.setItem("userId", userId)
        yield put(actionList.authSignupSuccess(token, userId))
    } catch (error) {
        yield console.log(error)
        yield put(actionList.authSignupFail())

    }
}

export function* authSignIn(action) {
    try {
        const response = yield axios.post('/users/login', action.formData);
    } catch (error) {

    }
}