import React from 'react';
import { TodoItem, TodoList } from '../../components';
import AddTodo from '../../containers/add-todo';

require('./style.scss');

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() { }
    render() {
        return (
            <div className='page'>
                <h1>Todo</h1>
                <AddTodo />
                {/* <VisibleTodoList /> */}
            </div>
        )
    }
}