import { connect } from 'react-redux';
import Places from './component';
import {
    searchGoogle,
    selectResult,
    searchGoogleSuccess
} from './actions';

const mapStateToProps = (state) => {
    let _state = state.places;
    return {
        query: _state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaces: (query) => dispatch(fetchPlaces(query)),
        searchGoogle: (query) => dispatch(searchGoogle(query)),
        selectResult: (result) => dispatch(selectResult(result)),
        searchGoogleSucces: (results) => dispatch(searchGoogleSuccess(results))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Places);