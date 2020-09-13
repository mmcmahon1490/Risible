import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <Link to="/main-page">main page</Link>
      <Link to="/create-post">create post</Link>
      <Link to="/contact-information">contact information</Link>
    </ul>
  )
}

export default NavBar;