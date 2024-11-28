import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Make sure to link the corresponding CSS file

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the registration logic here
    console.log({ fullName, email, password, confirmPassword });
  };

  return (
    <div className="register-container">
      <div className="header__logo">
        <img src="../Assets/images/logo1.png" alt="Logo" className="logo" />
      </div>

      <div className="register-form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="register-input"
          />
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <div className="login-link">
          <span>Already have an account? </span>
          <Link to="/login" className="login-btn">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
