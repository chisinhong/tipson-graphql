import React from 'react';
import Team from '../Team';
import Draw from '../Draw';
import Submit from '../Submit';

const Prediction = ({ Premier }) => {
    const predictionTeam = Premier.map((team, i) => {
        return <div className="btn-group d-flex justify-content-center" key={i}>
            <Team id={Premier[i].id} badge={Premier[i].badge} zhName={Premier[i].zhName} />
            <Draw />
            <Team id={Premier[i].id} badge={Premier[i].badge} zhName={Premier[i].zhName} />
            <Submit />
        </div>
    })
    return (
        <div>
            {predictionTeam}
        </div>
    );
}

export default Prediction
