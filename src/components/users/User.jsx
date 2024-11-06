import React from "react"


export const User = ({ id, email, first_name, last_name, avatar, onClickInvite, isInvited }) => (
    <li className="user-item">
        <div className="user-info">
            <img className="avatar" src={avatar} alt="User Avatar" />
            <div className="user-details">
                <h3>{first_name} {last_name}</h3>
                <p className="email">{email}</p>
            </div>
        </div>
        <div onClick={() => onClickInvite(id)} className="add-icon">{isInvited ? '-' : '+'}</div>
    </li>
);