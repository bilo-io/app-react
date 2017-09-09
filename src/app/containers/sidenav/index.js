import { connect } from 'react-redux';
import Sidenav from './component';
import {
    toggleSidenav
} from './actions';

const mapStateToProps = (state, ownProps) => {
    return {
        isOpen: state.isOpen
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleSidenav: () => dispatch(toggleSidenav())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidenav);