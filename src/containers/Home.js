import React from 'react';
import Footer from '../components/Footer';
import Prediction from '../components/modules/Prediction';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Premier } from '../premier-league';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <header className="d-flex justify-content-center">
                    <h1>今日預測</h1>
                </header>
                <Prediction Premier = { Premier } />
                <Footer className="footer"/>
            </div>
        )
    }
}

export default Home