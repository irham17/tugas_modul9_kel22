import React, { useState } from 'react';
import Login from './Login';
import UserManagementSystem from './Home';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
    setLoggedInUser(credentials.username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleAddUser = (newUser) => {
    const newUserId = users.length + 1;
    setUsers([...users, { id: newUserId, username: newUser.newUsername }]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleEditUser = (userId, newUsername) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, username: newUsername } : user
      )
    );
  };

  return (
    <div>
      {loggedInUser ? (
        <UserManagementSystem
          users={users}
          onLogout={handleLogout}
          onAddUser={handleAddUser}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditUser}
        />
      ) : (
        <div>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
