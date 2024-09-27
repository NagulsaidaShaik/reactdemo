import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Pages/AuthContext';

const SignInpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setUsernameError('');
    setPasswordError('');

    if (username.length < 5) {
      setUsernameError('Username must be at least 5 characters long.');
      valid = false;
    }
    const passwordRegex = /^[0-9]+$/;
    if (password.length < 6) {  // Corrected this line
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain only numbers.');
      valid = false;
    }
    if (valid) {
      console.log('Username:', username);
      console.log('Password:', password);

      setIsAuthenticated(true);
      navigate('/products', { replace: true });
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {usernameError && <div className="error">{usernameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInpage;
