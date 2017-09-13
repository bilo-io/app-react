import React from 'react';
// import { dispatch } from 'react-redux';
import {fetchPlaces, selectResult} from './actions'
require('./style.scss');

export const Places = (props, dispatch) => {

    return (
        <div className='page'>
            <h1>Places</h1>
            <input
                onChange={(e) => {
                props.fetchPlaces(e.target.value)
            }}/>
        </div>
    )
}

export default Places;