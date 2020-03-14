import { select, put } from 'redux-saga/effects'
import axios from '../../axios-auth'
import * as actionTypes from '../../redux-store/actionTypes'
export function* authSignup(action) {
    console.log(action)
    const state = yield select()
    // console.log(state)
    try {
        const response = yield axios.post('/users', action.formPayload);
        yield put(actionTypes.AUTH_SIGNUP_SUCCESS(response)) 
    } catch (error) {
        yield put(actionTypes.AUTH_SIGNUP_FAIL (response)) 
    }
    //     .then(function (response) {
    //         console.log(response)
    //         changeLoadingSts(false)
    //         props.history.push(routes.signin)
    //     })
    //     .catch(function (error) {
    //         changeLoadingSts(false)
    //     });
}