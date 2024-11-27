import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Make sure to link the corresponding CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // You can also implement the API call for login here
  };

  return (
    <div className="login-container">
      <div className="header__logo">
        <img src="../Assets/images/logo1.png" alt="Logo" className="logo" />
      </div>

      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="register-link">
          <span>Don't have an account? </span>
          <Link to="/register" className="register-btn">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
