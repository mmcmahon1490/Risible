import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div>
      <div id="footer">
        <Link to='/contact-information'>contact information</Link>
          <br />
        <Link to='/about-us'>about us</Link>
          <br />
        <Link to='/privacy'>privacy</Link>
          <br />
        <Link to='/terms-of-use'>terms of use</Link>
      </div>
    </div>
  )
}



export default Footer;
