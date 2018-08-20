import React from 'react';

const Team = ({ id, badge, zhName }) => {
    return (
        <button className='btn btn-secondary prediction-btn team-btn'>
            <img alt="team-badge" src={badge} className='badgeContainer'/>
            <div>
                <p className="team-name">{zhName}</p>
            </div>
        </button>
    );
}

export default Team;