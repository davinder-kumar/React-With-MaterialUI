import * as actionTypes from '../../../redux-store/actionTypes'

export const setNewArrivals = () =>{
    return {
        type: actionTypes.SET_NEW_ARRIVALS,
    }
}
export const setNewArrivalsSuccess = (products) =>{
    return {
        type: actionTypes.SET_NEW_ARRIVALS_SUCCESS,
        products: products
    }
}

export const setNewArrivalsFail = () =>{
    return {
        type: actionTypes.SET_NEW_ARRIVALS_FAIL,
    }
}