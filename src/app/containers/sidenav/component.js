import React from 'react';
import {Link} from 'react-router';
require('./style.scss');

export const Sidenav = (props) => {
    console.log({props})
    return (
        <div
            className={'sidenav ' + props.isOpen
            ? 'open'
            : ''}>
            {props.children}
        </div>
    )
}

export default Sidenav;