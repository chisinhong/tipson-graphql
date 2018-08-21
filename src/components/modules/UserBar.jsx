import React from 'react';
import UserName from '../UserName';
import UserPicture from '../UserPicture';
import UserRate from '../UserRate';
import { Link } from 'react-router-dom';

const UserBar = props => (
    <div className="UserBar d-flex justify-content-between">
        <UserPicture pic={props.pic} />
        <Link to = './profile'>
            <UserName name={props.name} />
        </Link>
        <UserRate total={props.total} win={props.win} />
    </div>
)

export default UserBar