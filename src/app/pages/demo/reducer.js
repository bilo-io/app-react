import {} from './actions';

const initialState = {
    pageTitle: 'Demo'
}

const demoReducer = (state = initialState, { type, ...action}) => {
    switch (type) {
        case 'ACTION_STRING_CONST':
            return {
                ...state,
                action.payload
            }
        default: return state;
    }
}

export default homeReducer;