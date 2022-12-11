import React from "react";

import './UserInfo.css';

export const UserInfo = props => {

    const users = [...props.users]
        .sort((a, b) => a.username.localeCompare(b.username))
        .map(userObj => <li key={userObj.username} className={"users"}>
            <img src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${userObj.picture}`} alt="" className={"users__picture"}/>
            <div  className={"users__info"}>
                <span className={"capitalize bold"}>{userObj.first_name} </span>
                <span className={"capitalize"}>{userObj.last_name}</span>
                <p className={"italic"}>{userObj.username}</p>
            </div>

        </li>);

    return <>
        {users}
    </>
}