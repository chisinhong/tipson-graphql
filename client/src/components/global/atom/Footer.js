import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faTrophy, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => (
    <div>
        <div className="space">
        </div>
        <footer className="fixed-bottom d-flex justify-content-around footer-btn">
            <Link to="/home">
                <FontAwesomeIcon icon={faClipboardCheck} />
            </Link>
            <Link to="/ranking">
                <FontAwesomeIcon icon={faTrophy} />
            </Link>
            <Link to="/search">
                <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </footer>
    </div>
)

export default Footer