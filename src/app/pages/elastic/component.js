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
                <button onClick={() => props.searchElastic(props.query)}>
                    Search
                </button>
            </div>    
            <button
                onClick={() => {
                    props.pingES()
                    }}
                style={{ float: 'right' }}>ping ES</button>

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