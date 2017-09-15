import {
    PING_CLIENT,
    PING_CLIENT_SUCCESS,
    PING_CLIENT_ERROR,
    SEARCH_ES,
    SEARCH_ES_SUCCESS,
    SEARCH_ES_ERROR,
    SELECT_RESULT
} from './actions';

const initialState = {
    query: 'age',
    results: []
}

export const elasticReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case PING_CLIENT:
            return {
                ...state,
                pinging: action.pinging    
            }    
        case PING_CLIENT_SUCCESS:
            console.log('elasticSearch all good!!')    
            return {
                ...state,
                pinging: action.pinging    
            }
        case PING_CLIENT_ERROR:
            console.log('elasticSearch cluster is down')    
            return {
                ...state,
                pinging: action.pinging    
            }        
        case SEARCH_ES:
            return {
                ...state,
                query: action.query
            }   
        case SEARCH_ES_SUCCESS:
            return {
                ...state,
                results: action.results
            }   
        case SEARCH_ES_ERROR:
            return {
                ...state,
                error: action.error
            }   
        case SELECT_RESULT:
            return {
                ...state,
                result: action.result
            }   
        default: return state;    
    }
}

export default elasticReducer;