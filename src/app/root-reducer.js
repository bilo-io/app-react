import { combineReducers } from 'redux';
// Pages
import homeReducer from './pages/home/reducer';
import demoReducer from './pages/demo/reducer';
import elasticReducer from './pages/elastic/reducer';
import placesReducer from './pages/places/reducer';
// Containers
import sidenavReducer from './containers/sidenav/reducer';

const rootReducer = combineReducers({
    // Pages
    demo: demoReducer,
    home: homeReducer,
    elastic: elasticReducer,
    places: placesReducer,
    // Containers
    sidenav: sidenavReducer
});

export default rootReducer;