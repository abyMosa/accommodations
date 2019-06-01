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
        // real life sinario will be async API call
        dispatch(fetchEstablishmentsStart());
        setTimeout(() => {
            if(hotelData){
                // console.log(hotelData.Establishments);
                dispatch(fetchEstablishmentsSuccess(hotelData.Establishments));
                // dispatch(setFilters(hotelData.Establishments));
            }else{
                dispatch(fetchEstablishmentsFail({message: "Data wasnt loaded"}));
            }
        }, 10);
    }
}

// export const setFilters = (establishments) => {
//     return dispatch => {
//         let filters = [
//             { type: 'Name', label: 'Filter by Name', value: null },
//             { type: 'Stars', label: 'Filter by rating', value: null, config: { } },
//             { type: 'MinCost', label: 'Your budget', value: null, config: {}},
//             { type: 'UserRatingCount', label: 'Trip Rating', value: null, config: {} },
//             { type: 'UserRating', label: 'User Rating', value: null, config: {} },
//         ];

//         filters.map(filter => {
//             if(filter.type !== 'Name'){
//                 let minMax = utility.getObjMinMax(establishments, filter.type);
//                 let options = utility.setOptions(establishments, minMax, filter.type);
//                 filter.config = { minMax, options }
//             }
//             return filter;
//         });

//         // console.log(filters);
//         dispatch(setFiltersInit(filters));
//     }
// }