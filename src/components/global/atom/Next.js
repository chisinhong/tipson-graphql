import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Next = props => (
    <Link to={props.url} className="btn backNext">
        <FontAwesomeIcon icon={faAngleRight} />
    </Link>
)

export default Next