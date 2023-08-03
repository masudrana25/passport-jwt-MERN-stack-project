import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
  //       navigate('/register');
  //     });
  // },[]);

  const handleRegister = () => {
    axios.post("http://localhost:3300/register", { username, password })
      .then(() => {
        console.log("user is registered");
        navigate("/login");
      })
      .catch((error)=>{
        console.log(error);
        navigate('/register');
      })
  }
  return (
    <div>
      <h1>Register page</h1>
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
      <button type="submit" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;