import React from 'react';
import Footer from '../components/global/atom/Footer';
import Prediction from '../components/home/modules/Prediction';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../components/global/atom/Title';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <Title title = {'今日預測'} />
                <Prediction />
                <Footer className="footer"/>
            </div>
        )
    }
}

export default Home