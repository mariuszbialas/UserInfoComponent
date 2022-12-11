import React from "react";

import './UserInfo.css';
import {UserInfoOneItem} from "./UserInfoOneItem";

export const UserInfo = props => {

    return [...props.users]
        .sort((a, b) => a.username.localeCompare(b.username))
        .map(userObj => <UserInfoOneItem user={userObj}/>)

}