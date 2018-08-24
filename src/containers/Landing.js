import React from 'react';
import './Landing.css';
import FacebookLogIn from '../components/landing/atom/FacebookLogIn'

class Landing extends React.Component {
    render() {
        return (
            <div className="content">
                <main className="d-flex flex-column" id="landingMain">
                    <h1 id="landingH1">Tipson</h1>
                    <h2 id="landingH2">貼神</h2>
                    <h3 id="landingH3">鍵盤足球專家</h3>
                </main>
                <FacebookLogIn />
            </div>
        )
    }
}

export default Landing