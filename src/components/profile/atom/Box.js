import React from 'react';

const Box = props => (
    <div className="record-div">
        <h2><strong>{props.title}</strong></h2>
        <p>{props.count}</p>
    </div>
)

export default Box