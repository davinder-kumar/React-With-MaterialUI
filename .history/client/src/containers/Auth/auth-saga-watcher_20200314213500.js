import { takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../../redux-store/actionTypes'
import * as workerFuncs from './auth-saga-worker'
export function* authSagaWatcher(){
    yield takeLatest(actionTypes.AUTH_SIGNUP_INIT,workerFuncs.authSignup)
}