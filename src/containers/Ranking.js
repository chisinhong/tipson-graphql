import React from 'react';
import Footer from '../components/Footer';
import BestTipser from '../components/modules/BestTipser';
import {Users} from '../Users';

class Ranking extends React.Component {
    render() {
        return (
            <div className="content">
                <header className="d-flex justify-content-center">
                    <h1>排行榜</h1>
                </header>
                <BestTipser Users = {Users}/>
                <Footer className="footer"/>
            </div>
        )
    }
}

export default Ranking