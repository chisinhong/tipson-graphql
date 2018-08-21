import React from 'react';
import Footer from '../components/Footer';
import Tipser from '../components/modules/Tipser';
import {Users} from '../Users';
import BestNext from '../components/modules/BestNext';
import './Ranking.css';

class Ranking extends React.Component {
    render() {
        return (
            <div className="content">
                <header className="d-flex justify-content-center">
                    <h1>排行榜</h1>
                </header>
                <BestNext />
                <Tipser Users = {Users}/>
                <span className="rankingSpace" />
                <BestNext />
                <Tipser Users = {Users}/>
                <Footer className="footer"/>
            </div>
        )
    }
}

export default Ranking