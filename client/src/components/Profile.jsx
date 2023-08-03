import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   axios
  //     .get('http://localhost:3300/profile', {
  //       headers: {
  //         //Authorization: token, // `Bearer ${token}`, // Add 'Bearer ' prefix to the token
  //         Authorization:  `Bearer ${token}`, // Add 'Bearer ' prefix to the token
  //       },
  //     })
  //     .then(res => console.log(res))
  //     .catch(err => {
  //       console.log(err);
  //       navigate('/login');
  //     });
  // },[]);

  return (
    <div>
      <h1> Profile page </h1>
    </div>
  );
};

export default Profile;
