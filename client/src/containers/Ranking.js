import React from 'react';
import Footer from '../components/global/atom/Footer';
import Tipser from '../components/ranking/modules/Tipser';
import {Users} from '../Users';
import Title from '../components/global/atom/Title';
import BestWorst from '../components/ranking/atom/BestWorst';
import './Ranking.css';

class Ranking extends React.Component {
    constructor(props){
        super(props)

        this.state={}
    }

    render() {
        return (
            <div className="content">
                <Title title={'排行榜'} />
                <BestWorst barTitle={'十大貼神'} />
                <Tipser Users = {Users}/>
                <span className="rankingSpace" />
                <BestWorst barTitle={'十大燈神'}/>
                <Tipser Users = {Users}/>
                <Footer className="footer"/>
            </div>
        )
    }
}

export default Ranking