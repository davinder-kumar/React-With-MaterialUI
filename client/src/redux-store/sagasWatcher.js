import { takeLatest, fork } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import { authSignup, authSignIn } from '../containers/Auth/Saga/auth-saga-worker'
import { setNewArrivalWorker } from '../containers/Homepage/Saga/homepage-saga-worker'
export function* authSagaWatchers() {
    yield takeLatest(actionTypes.AUTH_SIGNUP_INIT, authSignup)
    yield takeLatest(actionTypes.AUTH_SIGNIN_INIT, authSignIn)
}

export function* homepageSagaWatchers() {
    yield takeLatest(actionTypes.SET_NEW_ARRIVALS, setNewArrivalWorker)
}

export default function* rootSagaWatcher(){
    yield fork(homepageSagaWatchers)
    yield fork(authSagaWatchers)

}