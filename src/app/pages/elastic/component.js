import React from 'react';
require('./style.scss');

export class Places extends React.Component {

    render() {
        return (
            <div className='page'>
                <h1>Elastic</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input
                        style={{ padding: '0.75em' }}
                        onChange={(e) => {
                            this.props.updateQuery(e.target.value)
                        }} />
                    <button onClick={() => this.props.searchElastic(this.props.query)}>
                        Search
                </button>
                </div>
                <button
                    onClick={() => {
                        this.props.pingES()
                    }}
                    style={{ float: 'right' }}>ping ES</button>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {
                        this.props.results.map((result, idx) => {
                            return <div key={idx}>{result.formatted_address}</div>
                        })
                    }
                </div>
            </div>
        )
    }    
}

export default Places;