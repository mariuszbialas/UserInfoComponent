import React from "react";

export const UserInfoOneItem = ({user}) => {

    return <li>
        <div key={user.username} className={"users"}>
            <img src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${user.picture}`} alt="" className={"users__picture"}/>
            <div  className={"users__info"}>
                <span className={"capitalize"}>{user.first_name} </span>
                <span className={"capitalize bold"}>{user.last_name}</span>
                <hr/>
                <p>{user.username}</p>
            </div>
        </div>

    </li>
}