import React from 'react';

const Team = ({ badge, zhName, clicked, onClick }) => {
    if (clicked) {
        return (
            <button className='btn btn-warning prediction-btn team-btn'>
                <img alt="team-badge" src={badge} className='badgeContainer' />
                <div>
                    <p className="team-name">{zhName}</p>
                </div>
            </button>
        )
    } else {
        return (
            <button className='btn btn-secondary prediction-btn team-btn' onClick={onClick}>
                <img alt="team-badge" src={badge} className='badgeContainer' />
                <div>
                    <p className="team-name">{zhName}</p>
                </div>
            </button>
        );
    }
}

export default Team;