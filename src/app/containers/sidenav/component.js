import React from 'react';
import {Link} from 'react-router';
require('./style.scss');

export const Sidenav = (props) => {
    console.log('SideNav:', { props })
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