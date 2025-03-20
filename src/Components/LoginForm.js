import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <div className="login-form-container active">
      <X className="form-close-icon" id='form-close' onClick={onClose} />

      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="email"
          className="box"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="box"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login now" className="btn" />
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <p>
          Forgot password? <a href="/forgot-password">Click here</a>
        </p>
        <p>
          Don't have an account? <a href="/register">Register now</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;