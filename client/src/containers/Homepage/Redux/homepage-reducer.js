import * as actionTypes from '../../../redux-store/actionTypes'
import { updateObject } from '../../../Utilities/Utilities'
const initState = {
    newArrivals: [],
    loading : false,
    isError: false
}

const setNewArrivals = (state, action) => {
    return updateObject(state, {
        loading : true
    })
}
const setNewArrivalsSuccess = (state, action) => {
    return updateObject(state, {
        newArrivals: action.products,
        loading : false
    })
}


const setNewArrivalsFail = (state, action) => {
    return updateObject(state, {
        loading : false,
        isError: true
    })
}

const homepageReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_NEW_ARRIVALS : return setNewArrivals(state, action)
        case actionTypes.SET_NEW_ARRIVALS_SUCCESS: return setNewArrivalsSuccess(state, action)
        case actionTypes.SET_NEW_ARRIVALS_FAIL : return setNewArrivalsFail(state, action)

        default:
            return state;
    }


}

export default homepageReducer