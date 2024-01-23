import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = async () => {
    try {
      await axios.post('http://localhost:9999/auth/signup', {
        username,
        password
      });
      alert('Thanks for signing up. Your account has been created.')
    } catch (err) {
      alert('Unable to sign up: ', err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
