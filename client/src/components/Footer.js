import React from 'react';

import { Link } from "react-router-dom";
import logo from "../assets/logo_footer.png";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="main-logo" style={{ width: "180px", height: "auto" }} />
            </Link>
            <p className='semi-text pt-3'>Aliquam rhoncus ligula est, non pulvinar elit<br /> convallis nec. Donec mattis odio at.</p>
            <div className="social-links d-flex mt-4">
              <a href=""><i className="bi bi-twitter"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4 className='fw-regular'>Top 4 Category</h4>
            <ul className='semi-text'>
              <li><a href="#" style={{ textDecoration: 'none' }}>Development</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Finance & Accounting us</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Design</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Business</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Quick Links</h4>
            <ul className='semi-text'>
              <li><a href="#" style={{ textDecoration: 'none' }}>About</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Become Instructor</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Contact</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Career</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Support</h4>
            <ul className='semi-text' >
              <li><a href="#" style={{ textDecoration: 'none' }}>Help Center</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>FAQs</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Term & Condition</a></li>
              <li><a href="#" style={{ textDecoration: 'none' }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
