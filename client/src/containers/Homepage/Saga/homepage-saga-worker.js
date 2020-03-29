import axios from '../../../axios-api'
import { put } from 'redux-saga/effects'
import * as actionsList from '../../../redux-store/actionsList'

export function* setNewArrivalWorker() {


    try {
        const response = yield axios.get("/get-latest");
        yield put(actionsList.setNewArrivalsSuccess(response.data))
    } catch (error) {
        yield put(actionsList.setNewArrivalsFail(error))
    }
}