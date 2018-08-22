import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Back = props => (
    <Link to = {props.url} className="btn backNext">
        <FontAwesomeIcon icon = { faAngleLeft } />
    </Link>
)

export default Back