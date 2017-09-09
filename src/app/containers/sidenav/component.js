import React from 'react';
import {Link} from 'react-router';
require('./style.scss');

export const Sidenav = (props, isOpen) => {

    return (
        <div
            className={'sidenav ' + isOpen
            ? 'open'
            : ''}>
            {props.children}
        </div>
    )
}

export default Sidenav;