import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Import custom styles

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('password');
  const [formData, setFormData] = useState({ username: '', password: '', phone: '', otp: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Successful!');
    navigate('/dashboard');
  };

  return (
    <div className="container auth-container">
      <h2>Login</h2>
      <div className="toggle-buttons">
        <button 
          className={`btn ${loginMethod === 'password' ? 'custom-green-btn' : 'btn-light'}`} 
          onClick={() => setLoginMethod('password')}
        >
          Username & Password
        </button>
        <button 
          className={`btn ${loginMethod === 'otp' ? 'custom-green-btn' : 'btn-light'}`} 
          onClick={() => setLoginMethod('otp')}
        >
          OTP
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form">
        {loginMethod === 'password' ? (
          <>
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" className="form-control" placeholder="Enter your username" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter your password" required onChange={handleChange} />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" className="form-control" placeholder="Enter your phone number" required onChange={handleChange} />
            </div>
            <button type="button" className="btn btn-warning w-100 otp-btn">Send OTP</button>
            <div className="form-group">
              <label>OTP</label>
              <input type="text" name="otp" className="form-control" placeholder="Enter OTP" required onChange={handleChange} />
            </div>
          </>
        )}
        <button type="submit" className="btn custom-green-btn w-100 login-btn">Login</button>
        <p className="login-text">Don't have an account? <a href="/register">Register here</a></p>
      </form>

      {/* Hover Effect Styles */}
      <style>
        {`
          .custom-green-btn {
            background-color: #0E9900 !important; 
            color: white !important;
            border: none;
            transition: background-color 0.3s ease-in-out, transform 0.2s;
          }
          
          .custom-green-btn:hover {
            background-color: #1e990f !important; /* Darker green */
            transform: scale(1.05);
          }

          .otp-btn {
            transition: background-color 0.3s ease-in-out, transform 0.2s;
          }

          .otp-btn:hover {
            background-color: #e0a800 !important; /* Darker warning color */
            transform: scale(1.05);
          }

          .login-btn {
            transition: background-color 0.3s ease-in-out, transform 0.2s;
          }

          .login-btn:hover {
            background-color: #1e990f !important; /* Darker green */
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Login;
