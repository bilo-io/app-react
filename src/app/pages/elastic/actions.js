import elasticsearch from 'elasticsearch';
var client = new elasticsearch.Client({host: 'localhost:9200', log: 'trace'});
// Action Types
export const PING_CLIENT = 'PING_CLIENT';
export const PING_CLIENT_SUCCESS = 'PING_CLIENT_SUCCESS';
export const PING_CLIENT_ERROR = 'PING_CLIENT_ERROR';
//
export const SEARCH_ES = 'SEARCH_ES';
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const SEARCH_ES_SUCCESS = 'SEARCH_ES_SUCCESS';
export const SEARCH_ES_ERROR = 'SEARCH_ES_ERROR';
export const SELECT_RESULT = 'SELECT_RESULT';
// Action Creators
export const pingES = () => {
    return (dispatch) => {
        dispatch(pingClient())
        return client.ping({
            requestTimeout: 10000
        }, (error) => {
            error
                ? dispatch(pingClientError())
                : dispatch(pingClientSuccess())
        })
    }
}
export const pingClient = () => {
    return {type: PING_CLIENT, pinging: true}
}
export const pingClientSuccess = () => {
    return {type: PING_CLIENT_SUCCESS, pinging: false}
}
export const pingClientError = () => {
    return {type: PING_CLIENT_ERROR, pinging: false}
}
export const updateQuery = (query) => {
    return {type: UPDATE_QUERY, query}
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
            return client
                .search({q: query})
                .then((body) => {
                    dispatch(searchESSuccess(body.hits.hits))
                }, (error) => {
                    console.log('An error occured')
                })
        }
    }
}