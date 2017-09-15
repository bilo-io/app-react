import { connect } from 'react-redux';
import Places from './component';

import {
    pingES,
    pingClient,
    updateQuery,
    searchPlaces,
    searchES,
    searchElastic,
    selectResult,
    searchESSuccess
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.places;
    return {
        query: _state.query,
        results: _state.results,
        error: _state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pingES: () => dispatch(pingES()),
        searchElastic: (query) => dispatch(searchElastic(query)),
        updateQuery: (query) => dispatch(updateQuery(query)),
        searchES: (query) => dispatch(searchES(query)),
        selectResult: (result) => dispatch(selectResult(result)),
        searchESSuccess: (results) => dispatch(searchESSuccess(results))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Places);