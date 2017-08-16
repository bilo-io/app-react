import { combineReducers } from 'redux';
import homeReducer from './pages/home/reducer';

const rootReducer = combineReducers({
    homeView: homeReducer
});

export default rootReducer;