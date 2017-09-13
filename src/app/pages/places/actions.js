export const SEARCH_GOOGLE = 'SEARCH_GOOGLE';
export const SEARCH_GOOGLE_SUCCESS = 'SEARCH_GOOGLE_SUCCESS';
export const SEARCH_GOOGLE_ERROR = 'SEARCH_GOOGLE_ERROR';
export const SELECT_RESULT = 'SELECT_RESULT';

export const selectResult = (query) => {
    return {type: SELECT_RESULT, query}
}

export const searchGoogleError = (error) => {
    return {type: REQUEST_POSTS, error}
}

export const searchGoogleSuccess = (json) => {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        results: json.data,
        receivedAt: Date.now()
    }
}

export const searchGoogle = (query) => {
    return {type: SEARCH_GOOGLE, query}
}
export const fetchPlaces = (query) => {
    return (dispatch) => {
        dispatch(searchGoogle(query))
        return fetch(`https://www.reddit.com/r/${subreddit}`)
            .then(response => response.json(), error => console.log('An error occured.', { error }))
            .then(json => {
            dispatch(receivePosts(subreddit, json))
        })
    }
}
