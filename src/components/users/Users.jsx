import React, { useState } from 'react';
import { Skeleton } from './Skeleton.jsx';
import { User } from './User.jsx';




export const Users = ({ items, isLoading }) => {

    return (
        <>
            <div className='container'>
                <div className="search">
                    <input type="text" placeholder="Найти пользователя..." />
                </div>
                {isLoading ? (
                    <div className="skeleton-list">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                ) : (
                    <ul className="users-list">
                        {
                            items.map(obj =>
                                <User first_name={obj.first_name} last_name={obj.last_name} email={obj.email} avatar={obj.avatar} />)
                        }

                    </ul>
                )}
                <button className="send-invite">Отправить приглашение</button>
            </div>
        </>
    );
};