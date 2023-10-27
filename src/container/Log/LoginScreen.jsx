import React, { useState } from 'react';
import './LoginScreen.css'; // Import the CSS file

const LoginScreen = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // You can use the 'username' and 'password' state variables
  };

  return (
    <div className="container" id='log'>
      <div className="form-container">
        <div className="close-button" onClick={closePopup}>
          <span className="close-icon">&times;</span>
        </div>
        <h2 className='log'>Login</h2>
        <form className="form" onSubmit={handleLogin}>
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-button" type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginScreen;
