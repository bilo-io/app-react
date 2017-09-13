import SIDENAV_TOGGLE from './actions';

const initialState = {
    isOpen: false
}

const sidenavReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case SIDENAV_TOGGLE:
            return {
                ...state,
               isOpen: action.isOpen
            }
        default: return state;
    }
}

export default sidenavReducer;