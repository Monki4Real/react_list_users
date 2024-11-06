import React, { useState } from 'react';
import { Users } from './components/users/Users.jsx';
import { Success } from './components/Success.jsx';

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [invites, setInvites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data);

    }).catch(err => {
      console.warn(err);
      alert('Ошибка получение пользователей')

    }).finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className='App'>
      {
        success ? <Success count={invites.length} /> : <Users
          onClickSendInvites={onClickSendInvites}
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
        />
      }
    </div>
  );
}
