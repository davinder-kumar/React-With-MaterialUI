import { select } from 'redux-saga/effects'
export function* authSignup(action) {
    console.log(action)
    const state = yield select()
    console.log(state)
    axios.post('/users', formPayload);
    //     .then(function (response) {
    //         console.log(response)
    //         changeLoadingSts(false)
    //         props.history.push(routes.signin)
    //     })
    //     .catch(function (error) {
    //         changeLoadingSts(false)
    //     });
}