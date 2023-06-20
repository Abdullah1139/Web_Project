import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import { register } from '../Service/Api';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      const formData = {
        name,
        email,
        password,
        confirmPassword,
      };

      await register(formData);
      console.log('Registration submitted');
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  

  return (
    <div>
      <center>
      <div className='regForm'>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e)=>handleChange(e)}
          required
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>handleChange(e)}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>handleChange(e)}
          required
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>handleChange(e)}
          required
        />
        {passwordError && <p>{passwordError}</p>}
        <button onClick={handleSubmit}>Register</button>
        <button onClick={handleLoginClick}>Login</button>
      </form>
      </div>
      </center>
    </div>
  );
};

export default Registration;
