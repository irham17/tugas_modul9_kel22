import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    onLogin({ username, password });
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function RegisterForm({ onRegister }) {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegister = () => {
    onRegister({ newUsername, newPassword });
  };

  return (
    <div>
      <label>
        New Username:
        <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
      </label>
      <br />
      <label>
        New Password:
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = async (credentials) => {
    // Implement login logic here (similar to the previous example)
    console.log('Login:', credentials);
  };

  const handleRegister = async (newUser) => {
    // Implement registration logic here
    console.log('Register:', newUser);
    // Optionally, you can switch to the login form after successful registration
    setIsLoginForm(true);
  };

  return (
    <div>
      <h1>Login App</h1>
      {loggedInUser ? (
        <div>
          <p>Welcome, {loggedInUser.username}!</p>
          <button onClick={() => setLoggedInUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          {isLoginForm ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <RegisterForm onRegister={handleRegister} />
          )}
          <br />
          <button onClick={() => setIsLoginForm(!isLoginForm)}>
            {isLoginForm ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
