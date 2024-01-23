import React, { useState } from 'react';
import axios from 'axios';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await axios.post('http://localhost:9999/auth/signin', {
        username,
        password
      });
      alert(`Welcome, ${username}!`);
    } catch (err) {
      alert(`Unable to login. Please verify your credentials.\n`, err.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInPage;