import React, { useState } from 'react';

function UserManagementSystem({ users, onLogout, onAddUser, onDeleteUser, onEditUser }) {
  const [newUsername, setNewUsername] = useState('');
  const [editUserId, setEditUserId] = useState(null);

  const handleAddUser = () => {
    onAddUser({ newUsername });
    setNewUsername('');
  };

  const handleEditUser = (userId, newUsername) => {
    onEditUser(userId, newUsername);
    setEditUserId(null);
  };

  return (
    <div>
      <h1>Manajemen Akun</h1>
      <button onClick={onLogout}>Logout</button>
      <div>
        <h2>List Akun</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {editUserId === user.id ? (
                <div>
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                  <button onClick={() => handleEditUser(user.id, newUsername)}>Save</button>
                </div>
              ) : (
                <div>
                  {user.username} -{' '}
                  <button onClick={() => onDeleteUser(user.id)}>Delete</button>{' '}
                  <button onClick={() => setEditUserId(user.id)}>Edit</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Tambahkan Akun</h2>
        <label>
          New Username:
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </label>
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
}

export default UserManagementSystem;
