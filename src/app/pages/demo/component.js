import React from 'react';
require('./style.scss');

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return (
            <div className='page'>
                <h1>Demo</h1>
            </div>
        )
    }
}