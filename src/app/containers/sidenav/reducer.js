import TOGGLE_SIDENAV from './actions';

const initialState = {
    isOpen: false
}

const sidenavReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case TOGGLE_SIDENAV:
            return {
                ...state,
                stopId: action.stopId
            }
        default: return state
    }
}

export default sidenavReducer;