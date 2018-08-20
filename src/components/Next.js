import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Next = props => (
    <button className="btn backNext" href = '/History'>
        <FontAwesomeIcon icon = { faAngleRight } />
    </button>
)

export default Next