import React, {useState}  from 'react';
import Form from './components/form';
import UserList from './components/userlist';

import styles from './components/container.css';



function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className='container'>
    <h1 style={{marginLeft: '15px'}}>Userlist</h1>
    <Form users={users} setUsers={setUsers}></Form>
    <UserList users={users}></UserList>
    </div>
  );
}

export default App;
