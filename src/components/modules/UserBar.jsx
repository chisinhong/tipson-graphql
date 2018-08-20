import React from 'react';
import UserName from '../UserName';
import UserPicture from '../UserPicture';
import UserRate from '../UserRate';

const UserBar = props => (
    <div className="UserBar d-flex justify-content-between">
        <UserPicture pic={props.pic} />
        <a href="#">
        <UserName name={props.name} />
        </a>
        <UserRate total={props.total} win={props.win} />
    </div>
)

export default UserBar