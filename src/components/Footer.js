import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
 return (
  <div className='footer-container noselect'>
   <div class='wrap'>
     <Link to='/' className='logo'>
      <span style={{ 'margin-right': '7px' }}>TB</span>
      <i class='fab fa-angellist'></i>
     </Link>
     <div className='footer-center'>
      Feel free to send me a message! <i class='far fa-smile-beam'></i>
     </div>
    <div className=''>Tom Bushell © 2021</div>
   </div>
  </div>
 );
}

export default Footer;
