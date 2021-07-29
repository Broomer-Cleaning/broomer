import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <a href="tel:555-555-555">+1(555)555-5555</a>
            </div>
            <div className="d-flex">
              <a href="mailto:broomer.cleaning@gmail.com">
              <p>broomer.cleaning@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link to="/" className="footer-nav">Home</Link>
                <br />
                <Link to="/about" className="footer-nav">About us</Link>
                <br />
                <Link to="/services" className="footer-nav">Services</Link>
              </div>
              <div className="col">
                <Link to="/contact" className="footer-nav">Contact us</Link>
                <br />
                <Link to="/dashboard" className="footer-nav">Dashboard</Link>
                <br />
                <Link to="/login" className="footer-nav">Login</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              
                
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Broomer | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
