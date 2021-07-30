import React from 'react'
import "./services.css";
import inside from "./img/inside.png"
import outside from "./img/outside.png"
import car from "./img/car.png"


const Services = () => {
  return (
    <div id="services" className="services">
    <h1 className="py-5">our services</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="box">
            <div className="circle"><img className="inside-img" src={inside} alt="cleaning supplies" />
            </div>
            <h3>Living Area</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="box">
            <div className="circle"><img className="outside-img" src={outside} alt="house with broom"/></div>

            <h3>Outside Area</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
          </div>
        </div>
        {/* - */}
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="box">
            <div className="circle"><img className="car-img" src={car} alt="car with bubbles"/></div>

            <h3>Vehicles</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Services
