import React from "react";
import "./navbar.css";
import logo from "./img/logo.png";
import { Link } from 'react-router-dom';


//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">

    <Link to="/" className="navbar-brand"><img className="logo" src={logo} alt="logo"></img></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style ={{color: "#4473b7"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link  to="/" className="nav-link">Home <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link to="/about" offset={-110} className="nav-link">about us</Link>
        </li> 
        <li className="nav-item">
          <Link to="/services" offset={-110} className="nav-link">services</Link>
        </li> 
        <li className="nav-item">
          <Link to="/contact" offset={-110} className="nav-link">contact us</Link>
        </li> 
        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">Dashboard <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link to="/login" offset={-110} className="nav-link">Login</Link>
        </li> 
      </ul>
    </div>
    </div>
  </nav>
  );
}

export default Navbar
