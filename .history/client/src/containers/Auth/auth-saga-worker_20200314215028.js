import { select, put } from 'redux-saga/effects'
import axios from '../../axios-auth'
import * as actionsList from '../../redux-store/actionsList'
export function* authSignup(action) {
    console.log(action)
    const state = yield select()
    // console.log(state)
    try {
        yield axios.post('/users', action.formPayload);
        yield put() 
    } catch (error) {

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