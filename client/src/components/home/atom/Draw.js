import React from 'react';

const Draw = ({ clicked, onClick  }) => {
    if (clicked) {
        return (
            <button className='btn btn-warning prediction-btn draw-btn'>
                <h3>打和</h3>
            </button>
        )
    } else {
        return (
            <button className='btn btn-secondary prediction-btn draw-btn' onClick ={onClick}>
                <h3>打和</h3>
            </button>
        );
    }
}

export default Draw