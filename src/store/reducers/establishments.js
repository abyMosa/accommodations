import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    establishments: [],
    filters:[],
    loading: false,
};

const fetchEstablishmentsStart = (state, action) => {
    return updateObject( state, { loading: true } );
}
const fetchEstablishmentsSuccess = (state, action) => {
    return updateObject( state, { establishments: action.establishments, loading: false } );
}
const fetchEstablishmentsFail = (state, action) => {
    return updateObject( state, { error: action.error, loading: false } );
}
const setFilters = (state, action) => {
    return updateObject( state, { filters: action.filters} );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ESTABLISHMENTS_START: return fetchEstablishmentsStart( state, action );
        case actionTypes.FETCH_ESTABLISHMENTS_SUCCESS: return fetchEstablishmentsSuccess( state, action );
        case actionTypes.FETCH_ESTABLISHMENTS_FAIL: return fetchEstablishmentsFail( state, action );
        case actionTypes.SET_FILTERS: return setFilters( state, action );
        default: return state;
    }
};

export default reducer;