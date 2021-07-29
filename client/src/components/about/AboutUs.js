import React from 'react'
import "./about.css";
import us from "./img/logob.png"

const AboutUs = () => {
  return (
    <div id="aboutUs" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
           <img className="profile-img" src={us} alt="broomers"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-us">About Us</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <br/>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUs
