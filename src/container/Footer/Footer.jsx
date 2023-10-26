import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Email: caliwines@email.com</p>
      <p>Phone: +1 (234) 567 89 00</p>
      <p>Address: 1111 White Ln, St Helena, CA 94574</p>
      <div className="social-icons">
      <a href="#" target="_blank" rel="noopener noreferrer" className="square">
        {/* Font Awesome Icons */}
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="square">
      <i class="fa fa-twitter-square" aria-hidden="true"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="square">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
    </div>

    <div className="footer-section">
      <h3>Information</h3>
      <ul>
        <li>History</li>
        <li>About Us</li>
        <li>Awards</li>
        <li>FAQ</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Shop</h3>
      <ul>
        <li>Best Deals</li>
        <li>All Wines</li>
        <li>Delivery Information</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>

    
  </div>
);

export default Footer;
