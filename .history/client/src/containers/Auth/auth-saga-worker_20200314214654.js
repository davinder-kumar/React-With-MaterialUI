import { select } from 'redux-saga/effects'
import axios from '../../axios-auth'
export function* authSignup(action) {
    console.log(action)
    const state = yield select()
    // console.log(state)
    try {
        yield axios.post('/users', action.formPayload);
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