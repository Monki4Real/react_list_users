import React, { useState } from 'react';
import { Users } from './components/users/Users.jsx';

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data);

    }).catch(err => {
      console.warn(err);
      alert('Ошибка получение пользователей')

    }).finally(() => setLoading(false));
  }, []);

  return (
    <div className='App'>
      <Users items={users} isLoading={isLoading} />
      {/* <Success/> */}
    </div>
  );
}
