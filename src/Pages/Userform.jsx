import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('You are registered successfully!');
  
    navigate('/');
  };

  return (
    <div className="user-form">
      <h2 className="user-form-title">User Form</h2>
      {isNewUser ? (
        <form onSubmit={handleSubmit} className="registration-form">
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
          {message && <p className="success-message">{message}</p>}
        </form>
      ) : (
        <div className="user-options">
          <Link to="#" onClick={() => setIsNewUser(true)} className="user-link">New User</Link>
          <Link to="/signin" className="user-link">Existing User</Link>
        </div>
      )}
    </div>
  );
};

export default UserForm;
