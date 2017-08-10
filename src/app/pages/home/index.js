import React from 'react';
require('./style.scss');

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return (
            <div className='page'>
                <h1>Home</h1>
            </div>
        )
    }
}