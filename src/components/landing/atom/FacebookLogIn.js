import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/fontawesome-free-brands'

class FacebookLogIn extends React.Component {
    render() {
        return (
            <Link to="/auth/google" className="btn btn-primary login d-flex justify-content-center">
                <FontAwesomeIcon icon={faFacebook}/>
                <span style={{margin:'0.3em'}}/>
                Facebook登入
            </Link>)
    }
}

export default FacebookLogIn