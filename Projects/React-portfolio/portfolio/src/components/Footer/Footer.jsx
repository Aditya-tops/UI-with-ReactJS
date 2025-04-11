import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.jpg"
import user_icon from "../../assets/user_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer-top">
              <div className="footer-top-left">
                  <img src={logo} alt="" height="100px" />
                  <p>I am experineced Fullstack Developer with over a decode of
              professional expertise in the field.</p>
              </div>
              <div className="footer-top-right">
                  <div className="footer-email-input">
                      <img src={user_icon} alt="" height="50px" />
                      <input type="email" placeholder='Enter your email' />
                  </div>
                  <div className="footer-subscribe">
                        Subscribe
                  </div>
              </div>
          </div>
          <hr />
          <div className="footer-bottom">
              <p className="footer-bottom-left">
                  @ 2025 Aditya Patel.All rights reserved.
              </p>
              <div className="footer-bottom-right">
                  <p>Term of Services</p>
                  <p>Privacy Policy</p>
                  <p>Connect with me</p>
              </div>
          </div>
    </div>
  )
}

export default Footer
