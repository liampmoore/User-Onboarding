import React, {useState}  from 'react';
import Form from './components/form';
import UserList from './components/userlist';



function App() {
  const [users, setUsers] = useState([]);
  return (
    <div><Form users={users} setUsers={setUsers}></Form>
    <UserList users={users}></UserList>
    </div>
  );
}

export default App;
