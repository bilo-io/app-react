import {
    UPDATE_QUERY,
    SEARCH_RESULTS,
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from './action-types';

export const updateQuery = (query) => {
    return {
        type: UPDATE_QUERY,
        query
    }
}

export const searchResults = (query) => {
    return {
        type: SEARCH_RESULTS,
        loading: true,
        query,
        results: []
    }
}

export const searchSuccess = (json) => {
    return {
        type: SEARCH_SUCCESS,
        loading: false,
        results: json
    }
}

export const searchError = (error) => {
    console.log({ error });
    return {
        type: SEARCH_ERROR,
        loading: false,
        results: []
    }
}