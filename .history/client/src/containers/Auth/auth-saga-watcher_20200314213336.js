import { takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../../redux-store/actionTypes'
export function* authSagaWatcher(){
    yield takeLatest(actionTypes.AUTH_SIGNUP_INIT,AUTH_SIGNUP)
}