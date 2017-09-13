import { combineReducers } from 'redux';
// Pages
import asyncReducer from './pages/async/reducer';
import homeReducer from './pages/home/reducer';
import demoReducer from './pages/demo/reducer';
import todoReducer from './pages/todo/reducer';
import placesReducer from './pages/places/reducer';
// Containers
import sidenavReducer from './containers/sidenav/reducer';

const rootReducer = combineReducers({
    // Pages
    async: asyncReducer,
    demo: demoReducer,
    home: homeReducer,
    todo: todoReducer,
    places: placesReducer,
    // Containers
    sidenav: sidenavReducer
});

export default rootReducer;