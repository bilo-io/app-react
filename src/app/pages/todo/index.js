import { connect } from 'react-redux';
import Todo from './component';
import {
    addTodo
} from './actions';

const mapStateToProps = (state) => {
    let localState = state.todo;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: dispatch(addTodo())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);