import React from "react"


export const User = ({ id, email, first_name, last_name, avatar }) => (
    <li>
        <div>
            <img className="avatar" src={avatar} alt="" />
            <div>
                <h3>{first_name} {last_name}</h3>
                <p>{email}</p>
            </div>
        </div>
    </li>
);