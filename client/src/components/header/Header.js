import React from 'react'
import "./header.css";



//react-typed
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
      <div class="input-group w-50">
   <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
   <button type="button" class="btn btn-outline-primary">SEARCH</button>
   </div>
   <Typed
      className="typed-text"
      strings={["Living area", "Outside", "Vehicles"]}
      typeSpeed={40}
      backSpeed={60}
      loop
      />
      </div>
      
    </div>
  )
}

export default Header

