import React from 'react';
require('./style.scss');

export const Places = (props) => {

    return (
        <div className='page'>
            <h1>Places</h1>
            <input
                onChange={(e) => {
                props.searchPlaces(e.target.value)
            }}/>
        </div>
    )
}

export default Places;