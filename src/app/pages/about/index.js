import { connect } from 'react-redux';
import About from './component';
import {
} from './actions';

const mapStateToProps = (state) => {
    let localState = state.about;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);