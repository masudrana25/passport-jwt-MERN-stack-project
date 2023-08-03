import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Nopage from '../components/Nopage';
import Header from '../layout/Header';
const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Nopage />} />
          
        </Routes>
        
    </BrowserRouter>
    </div>
  );
};

export default Index;