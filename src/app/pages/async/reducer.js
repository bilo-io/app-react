import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from './actions';

const initialState = {

}

export const asyncReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case SELECT_SUBREDDIT:
            return {
            
            }   
        case INVALIDATE_SUBREDDIT:
            return {
            
            }   
        case REQUEST_POSTS:
            return {
            
            }   
        case RECEIVE_POSTS:
            return {
            
            }   
        default: return state;    
    }
}

export default asyncReducer;