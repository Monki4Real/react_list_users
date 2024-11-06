import React, { useState } from 'react';
import { Skeleton } from './Skeleton.jsx';
import { User } from './User.jsx';




export const Users = ({ items, isLoading, searchValue, onChangeSearchValue, invites, onClickInvite, onClickSendInvites }) => {
    console.log(searchValue)
    return (
        <>
            <div className='container'>
                <div className="search">
                    <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Найти пользователя..." />
                </div>
                {isLoading ? (
                    <div className="users-list">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                ) : (
                    <ul className="users-list">
                        {
                            items.filter(obj => {
                                const fullName = (obj.first_name + obj.last_name).toLowerCase();
                                return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase());
                            }).map(obj =>
                                <User onClickInvite={onClickInvite} isInvited={invites.includes(obj.id)} key={obj.id} {...obj} />)
                        }

                    </ul>
                )}
                {
                    invites.length > 0 && (<button onClick={onClickSendInvites} className="send-invite">Отправить приглашение</button>)
                }
            </div>
        </>
    );
};