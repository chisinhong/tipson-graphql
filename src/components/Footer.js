import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faTrophy, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ icon, url }) => (
    <div>
        <div className = "space">
        </div>
        <footer className = "fixed-bottom d-flex justify-content-around footer-btn">
            <a href = "/home">
                <FontAwesomeIcon icon = { faClipboardCheck } />
            </a>
            <a href = "/ranking">
                <FontAwesomeIcon icon = { faTrophy } />
            </a>
            <a href = "/search">
                <FontAwesomeIcon icon = { faSearch } />
            </a>
            <a href = "/profile">
                <FontAwesomeIcon icon = { faUser } />
            </a>
        </footer>
    </div>
)

export default Footer