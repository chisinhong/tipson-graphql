import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/fontawesome-free-brands'

class GoogleLogIn extends React.Component {
    render() {
        return (
            <Link to="/auth/google" className="btn btn-danger">
                <FontAwesomeIcon icon={faGoogle}/>
                <span style={{margin:'0.3em'}}/>
                Google登入
            </Link>)
    }
}

export default GoogleLogIn