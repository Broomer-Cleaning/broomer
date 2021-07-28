import React from "react";
import "./navbar.css";
import logo from "./img/logo.png";
import {Link} from "react-scroll";


//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

    <Link smooth={true} to="home" className="navbar-brand"><img className="logo" src={logo} alt="logo"></img></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style ={{color: "#fff"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link smooth={true} to="home" className="nav-link">Home <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="aboutMe" offset={-110} className="nav-link">about us</Link>
        </li> 
        <li className="nav-item">
          <Link smooth={true} to="aboutMe" offset={-110} className="nav-link">services</Link>
        </li> 
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-110} className="nav-link">contact us</Link>
        </li> 
        <li className="nav-item">
          <Link smooth={true} to="contactMe" offset={-110} className="nav-link">Login</Link>
        </li> 
      </ul>
    </div>
    </div>
  </nav>
  );
}

export default Navbar
