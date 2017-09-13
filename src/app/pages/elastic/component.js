import React from 'react';
require('./style.scss');

export const Places = (props) => {

    return (
        <div className='page'>
            <h1>Elastic</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <input
                    style={{padding: '0.75em'}}    
                    onChange={(e) => {
                    props.updateQuery(e.target.value)
                    }} />
                <button onClick={() => props.searchPlaces(props.query)}>
                    Search
                </button>
            </div>    

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