import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   axios
  //     .get('http://localhost:3300/profile', {
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //     .then(res => navigate("/profile"))
  //     .catch(err => {
  //       console.log(err);
  //       navigate('/login');
  //     });
  // },[]);

  const handleLogin = () => {
    axios
      .post('http://localhost:3300/login', { username, password })
      .then((user) => {
        localStorage.setItem("token", user.data.token);
        console.log('user is logged in');
        navigate('/profile');
      })
      .catch(error => {
        console.log(error);
        navigate('/login');
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        required
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        required
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
