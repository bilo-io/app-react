import { combineReducers } from 'redux';
// Pages
import homeReducer from './pages/home/reducer';
import todoReducer from './pages/todo/reducer';
// Containers
import sidenavReducer from './containers/sidenav/reducer';

const rootReducer = combineReducers({
    homeView: homeReducer,
    todoView: todoReducer,
    sidenavView: sidenavReducer
});

export default rootReducer;