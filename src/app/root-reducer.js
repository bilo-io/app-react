import { combineReducers } from 'redux';
import homeReducer from './pages/home/reducer';
import todoReducer from './pages/todo/reducer';

const rootReducer = combineReducers({
    homeView: homeReducer,
    todoView: todoReducer
});

export default rootReducer;