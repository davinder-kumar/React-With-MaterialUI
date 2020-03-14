import { select, put } from 'redux-saga/effects'
import axios from '../../axios-auth'
import * as actionList from '../../redux-store/actionsList'
export function* authSignup(action) {
    // console.log(action)
    // const state = yield select()
    // console.log(state)
    try {
        const response = yield axios.post('/users', action.formPayload);
        yield put(actionList.authSignupSuccess(response)) 
    } catch (error) {
        yield put(actionList.authSignupFail()) 
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