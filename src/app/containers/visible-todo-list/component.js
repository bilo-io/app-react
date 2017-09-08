import React from 'react';

class VisibleTodoList extends React.Component {
    render() {
        return (
            <div className='myComponent'></div>
        )
    }
}

const VisibleTodoList = ({someProp}) => {
    if(someProp) {
        return (
            <div>
                <h1>MyComponent</h1>
            </div>
        )
    }
}

export default VisibleTodoList;