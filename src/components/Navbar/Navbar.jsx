import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [ToggleMenu , setToggleMenu] = useState(false);
  return(

  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
          <img src ={images.gericht} alt=' app logo'/>
      </div>
      <ul className='app_navbar-links'>
        <li className='p_opensans'> <a href="tackets">Tickets</a></li>
        <li className='p_opensans'> <a href="invitation">Invitations</a></li>
        <li className='p_opensans'> <a href="#services">Services</a></li>
        <li className='p_opensans'> <a href="#about">AboutUs</a></li>
        <li className='p_opensans'> <a href="#contact">ContactUs</a></li>
        </ul>
    <div className='app_navbar-login-signup'>
     <a href='#login' className='p_opensans'> Log In</a>
     <div></div>
     <a href='#signup' className='p_opensans'> Sign Up</a>
    </div>
    <div className='app_navbar-smallscreen'>
      <GiHamburgerMenu color="#fff" fontSize ={27} onClick={() => setToggleMenu(!ToggleMenu)}/>
{ToggleMenu  && (
<div className='app_navbar-smallscreen_overlay flex_center slide-bottom'>     
             <MdOutlineRestaurantMenu fontSize={27} className ='overlay_close' onClick={()=>setToggleMenu(false)}/>
      <ul className='app_navbar-smallscreen-links'>
        <li className='p_opensans'> <a href="tackets">Tickets</a></li>
        <li className='p_opensans'> <a href="invitation">Invitations</a></li>
        <li className='p_opensans'> <a href="#services">Services</a></li>
        <li className='p_opensans'> <a href="#about">AboutUs</a></li>
        <li className='p_opensans'> <a href="#contact">ContactUs</a></li>
        </ul>
    </div>
      )}
</div>
  </nav>
);
}

export default Navbar;
