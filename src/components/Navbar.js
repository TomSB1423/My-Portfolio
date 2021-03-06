import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);

 return (
  <nav className='navbar noselect'>
   <div className='navbar-container'>
    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
     <span style={{ 'padding-right': '7px' }}>TB</span>
     <i class='fab fa-angellist'></i>
    </Link>
    <div className='menu-icon' onClick={handleClick}>
      {/* The close vs hamberger menu */}
     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
     <li className='nav-item'>
      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
       Home
      </Link>
     </li>
     <li className='nav-item'>
      <Link to='/archive' className='nav-links' onClick={closeMobileMenu}>
       Archive
      </Link>
     </li>
    </ul>
   </div>
   <div className='nav-fade nav-fade-bottom'/>
  </nav>
 );
}

export default Navbar;
