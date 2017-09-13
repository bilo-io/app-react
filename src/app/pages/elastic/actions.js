export const SEARCH_ES = 'SEARCH_ES';
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const SEARCH_ES_SUCCESS = 'SEARCH_ES_SUCCESS';
export const SEARCH_ES_ERROR = 'SEARCH_ES_ERROR';
export const SELECT_RESULT = 'SELECT_RESULT';

export const updateQuery = (query) => {
    return { type: UPDATE_QUERY, query}
}

export const selectResult = (query) => {
    return {type: SELECT_RESULT, query}
}

export const searchESError = (error) => {
    return {type: REQUEST_POSTS, error}
}

export const searchESSuccess = (json) => {
    console.log({json})
    return {
        type: SEARCH_ES_SUCCESS,
        results: json.results,
        receivedAt: Date.now()
    }
}

export const searchES = (query) => {
    return {type: SEARCH_ES, query}
}
export const searchElastic = (query) => {
    return (dispatch) => {
        dispatch(searchES(query))
        if (query && query.length > 0) {
            return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}`)
                .then(response => response.json(), error => console.log('An error occured.', { error }))
                .then(json => {
                    dispatch(searchESSuccess(json))
                })
        }
    }
}
