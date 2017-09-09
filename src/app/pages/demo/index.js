import { connect } from 'react-redux';
import Demo from './component';
import {
    updateText,
    saveText
} from './actions';

const mapStateToProps = (state) => {
    return {
        text: state.text,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (val) => dispatch(updateText(val)),
        saveText: (val) => dispatch(saveText(val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo);