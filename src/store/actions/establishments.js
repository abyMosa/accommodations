import * as actionTypes from '../actions/actionTypes';
import hotelData from '../../hotels.json';
// import * as utility from '../utility';

export const fetchEstablishmentsStart = () => {
    return{
        type: actionTypes.FETCH_ESTABLISHMENTS_START
    }
}

export const fetchEstablishmentsSuccess = (establishments) => {
    return{
        type: actionTypes.FETCH_ESTABLISHMENTS_SUCCESS,
        establishments: establishments
    }
}

export const fetchEstablishmentsFail = (error) => {
    return{
        type: actionTypes.FETCH_ESTABLISHMENTS_FAIL,
        error: error
    }
}

export const setFiltersInit = (filters) => {
    return{
        type: actionTypes.SET_FILTERS,
        filters: filters
    }
}


export const establishmentsInit = () => {
    return dispatch => {
        dispatch(fetchEstablishmentsStart());
        setTimeout(() => {
            if(hotelData){
                dispatch(fetchEstablishmentsSuccess(hotelData.Establishments.sort((a,b) => a.EstablishmentId - b.EstablishmentId) ));
            }else{
                dispatch(fetchEstablishmentsFail({message: "Data wasnt loaded"}));
            }
        }, 10);
    }
}

