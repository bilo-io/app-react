import { combineReducers } from 'redux';
// Pages
import homeReducer from './pages/home/reducer';
import demoReducer from './pages/demo/reducer';
import todoReducer from './pages/todo/reducer';
// Containers
import sidenavReducer from './containers/sidenav/reducer';

const rootReducer = combineReducers({
    home: homeReducer,
    todo: todoReducer,
    demo: demoReducer,
    sidenav: sidenavReducer
});

export default rootReducer;