import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !email || !password) {
      alert("Please fill all the fields.");
      return;
    }     
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    } 
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    } 
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password :", password);    
    alert("Login Successful!");
  } ;
  return (
    <div className="login-container">
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>      
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    );
}
export default Login;