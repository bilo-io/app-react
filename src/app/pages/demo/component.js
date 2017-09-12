import React from 'react';
require('./style.scss');

export const Demo = (props) => {
    console.log('Demo props:', { props });
    return (
        <div className='page'>
            <h1>Demo</h1>
            {/* <label>Text: {props.text}</label> */}
            <input
                onChange={(e) => { props.updateText(e.target.value) }} />
            <button onClick={() => props.saveText(props.text)}>Save</button>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    (props.items || []).map((item) => {
                        return <div>{item}</div>
                    })
                }
            </div>    

        </div>
    )
}

export default Demo;