import React from 'react';
import { premier } from '../../../premier-league';
import Match from './Match';

class Prediction extends React.Component {
    constructor(props) {
        super(props)

        this.state = { premier };
    }

    render() {
        const predictionTeam = this.state.premier.map((team, i) => {
            return <Match key={i} premier = {team} />
        })
        return (
            <div>
                {predictionTeam}
            </div>
        );
    }
}

export default Prediction