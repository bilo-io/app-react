import React from 'react';
require('./style.scss');

export const Places = (props) => {

    return (
        <div className='page'>
            <h1>Places</h1>
            <input
                onChange={(e) => {
                props.searchPlaces(e.target.value)
                }} />
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                {
                    props.results.map((result, idx) => {
                        return <div key={idx}>{result.formatted_address}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Places;