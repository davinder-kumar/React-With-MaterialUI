import { select } from 'redux-saga/effects'
export function* authSignup(action, state) {
    console.log(action , state)
    // axios.post('/users', formPayload)
    //     .then(function (response) {
    //         console.log(response)
    //         changeLoadingSts(false)
    //         props.history.push(routes.signin)
    //     })
    //     .catch(function (error) {
    //         changeLoadingSts(false)
    //     });
}