import React from 'react';
import BestNext from './BestNext';
import UserBar from './UserBar';

const BestTipser = ({ Users }) => {
    const Top10 = Users.map((user, i) => {
        return <div className='BestTipster d-flex flex-column'>
            <BestNext />
            <UserBar
                key={i}
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

export default BestTipser