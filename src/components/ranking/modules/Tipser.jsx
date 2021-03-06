import React from 'react';
import UserBar from './UserBar';

const Tipser = ({ Users }) => {
    const Top10 = Users.map((user, i) => {
        return <div key={i} className='Tipster d-flex flex-column'>
            <UserBar
                pic={Users[i].pic}
                name={Users[i].name}
                total={Users[i].total}
                win={Users[i].win} />
        </div>
    })
    return (
        <div>
            {Top10}
        </div>
    );
}

export default Tipser