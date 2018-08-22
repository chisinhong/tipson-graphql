import React from 'react';
import './Landing.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="content">
                <main class="d-flex flex-column" id="landingMain">
                    <h1 id="landingH1">Tipson</h1>
                    <h2 id="landingH2">貼神</h2>
                    <h3 id="landingH3">鍵盤足球專家</h3>
                </main>
                <div class="d-flex justify-content-center">
        <a href="/auth/facebook" class="btn btn-primary fab fa-facebook-square" id="fb-login">Facebook登入</a>
    </div>
            </div>
        )
    }
}

export default Landing