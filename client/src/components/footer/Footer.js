import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";



import Auth from '../../utils/auth';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
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
                  {Auth.loggedIn() ? (
                 <>
               <div className="col">
                <Link to="/dashboard" className="footer-nav">Dashboard</Link>
                <br />
                <Link to="/profile" className="footer-nav">Profile</Link>
                <br />
                <Link to="/logout" className="footer-nav">Logout</Link>
                <br />
                </div>
                  </>
                ) : (
                <Link to="/login" className="footer-nav">Login</Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">  
            <FacebookShareButton
                url={"https://www.facebook.com/Broomer-108877578087838"}
                quote={"Broomer"}
                hashtag="#broomer"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://twitter.com/home"}
                quote={"Broomer"}
                hashtag="#broomer"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/broomer-cleaning-3b77a8218/"}
                quote={"Broomer"}
                hashtag="#broomer"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>      
            
            <p className="pt-3 text-center ">
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
