import * as actionTypes from '../actions/actionTypes';
import hotelData from '../../hotels.json';

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

export const establishmentsInit = () => {
    return dispatch => {
        // real life sinario will be async API call
        dispatch(fetchEstablishmentsStart());
        setTimeout(() => {
            if(hotelData){
                console.log(hotelData.Establishments);
                dispatch(fetchEstablishmentsSuccess(hotelData.Establishments));
            }else{
                dispatch(fetchEstablishmentsFail({message: "Data wasnt loaded"}));
            }
        }, 200);
    
    }
}