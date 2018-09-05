import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/fontawesome-free-brands'

class GoogleLogIn extends React.Component {
    render() {
        return (
            <button className="btn btn-primary d-flex justify-content-center login">
                <FontAwesomeIcon icon={faFacebook}/>
                <span style={{margin:'0.3em'}}/>
                Facebook登入
            </button>)
    }
}

export default GoogleLogIn