import { connect } from 'react-redux';
import Home from './component';
import {
    updateQuery,
    searchResults,
    searchSuccess,
    searchError,
} from './actions';

const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuery: (query) => dispatch(updateQuery(query)),
        searchResults: (query) => dispatch(searchResults(query)),
        searchSuccess: (json) => dispatch(searchSuccess(json)),
        searchError: (error) => dispatch(searchError(error))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);