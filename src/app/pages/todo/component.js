import React from 'react';
import { TodoItem, TodoList } from '../../components';
import AddTodo from '../../containers/add-todo';
import VisibleTodoList from '../../containers/visible-todo-list';
require('./style.scss');

export const Todo = (dispatch) => {
    return (
        <div className='page'>
            <h1>Todo</h1>
            <AddTodo />
            {/* <VisibleTodoList /> */}
        </div>
    )
}
export default Todo;