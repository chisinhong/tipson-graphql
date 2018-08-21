import React from 'react';
import UserName from '../UserName';
import UserPicture from '../UserPicture';
import UserStatus from '../UserStatus';

const Info = props => (
    <div className="aboutUser">
        <UserPicture pic={props.pic} />
        <div className="about-info">
            <UserName name={props.name} className="rounded-circle rounded mx-auto d-block img-fluid" />
            <UserStatus status={props.status} />
        </div>
    </div>
)

export default Info
