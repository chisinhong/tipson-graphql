import React from 'react';

const UserPicture = props => (
    <img
        className="rounded-circle img-fluid userPic"
        src = { props.pic }
        alt = "user-pic"
    />
)

export default UserPicture