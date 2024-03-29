import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app_header app_wrapper section_padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="Taste away" style={{ color: 'white' }} />
      <div className="header-content">
        <h1 className="app_header-h1">Event Maestro</h1>
        <p className="p_opensans" style={{ margin: '2rem 0', color: 'white' }}>
          Good planning makes your day special.
        </p>
        <button className="custom_buttom">Learn More</button>
      </div>
    </div>
  </div>
);

export default Header;
