import React from 'react';
import {toggleSidenav} from './actions';
import {Link} from 'react-router';
require('./style.scss');

export const Sidenav = (props, dispatch) => {
    return props.isOpen    
        ? (
            <div
                className={'sidenav ' + props.isOpen
                ? 'open'
                : ''}>
                {props.children}
            </div>
        )
        : null;
}

export default Sidenav;