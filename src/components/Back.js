import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Back = props => (
    <button className="btn backNext" href = '/Profile'>
        <FontAwesomeIcon icon = { faAngleLeft } />
    </button>
)

export default Back