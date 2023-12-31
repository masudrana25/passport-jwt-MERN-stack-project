import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/register"> Register</Link>
        <Link to="/login"> Login</Link>
        <Link to="/profile"> Profile</Link>
      </nav>
    </div>
  );
};

export default Header;