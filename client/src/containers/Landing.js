import React from 'react';
import './Landing.css';
import Users from '../components/global/atom/Users'
import GoogleLogIn from '../components/landing/atom/GoogleLogIn'

class Landing extends React.Component {
    render() {
        return (
            <div className="content">
                <main className="d-flex flex-column" id="landingMain">
                    <h1 id="landingH1">Tipson</h1>
                    <h2 id="landingH2">貼神</h2>
                    <h3 id="landingH3">鍵盤足球專家</h3>
                </main>
                <GoogleLogIn />
                <Users />
            </div>
        )
    }
}

export default Landing