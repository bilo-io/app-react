import React from 'react';
require('./style.scss');

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return (
            <div className='page'>
                <h1>About</h1>
            </div>
        )
    }
}