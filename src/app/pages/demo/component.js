import React from 'react';
require('./style.scss');

export const Demo = (props) => {
    return (
        <div className='page'>
            <h1>Demo</h1>
            <label>{props.text}</label>
            <input
                onChange={(e) => { props.updateText(e.target.value) }} />
            <button onClick={() => props.saveText(props.text)}>Save</button>
            {(props.items || []).map((item) => {
                <span>{item}</span>
            })}

        </div>
    )
}

export default Demo;