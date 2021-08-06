import React from 'react'
import "./about.css";
import us from "./img/logob.png"

const AboutUs = () => {
  return (
    <div id="aboutUs" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={us} alt="broomers" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-us">About Us</h1>
          <p>
            Broomer is an instant job networking application for connecting cleaners and people who need quick cleaning jobs. If you have a messy house, car, garage, office, or other kind of space that needs a little extra care, leave it to Broomer to introduce you to dozens of qualified cleaning professionals.
          </p>
            <h2>How It Works (and how to get started in less than three minutes)!</h2>
            <h3>If you need a cleaning professional..</h3>
            <p>Create an account, fill out your profile, then create a job. Give us a few simple details, including some estimates for time required and pay per hour. When you hit publish, your job will be live and is instantly available to dozens of cleaning professionals. The first one who applies for the job, while matching your credentials, will be deployed to your home. It's that fast!</p>

            <p>After they're done, they submit their work for review. You must then confirm completion of work. After that, you get to confirm the work details. Tipping doesn't hurt, either!</p>

            <h3>If you are a cleaning professional..</h3>
            <p>Sign up, then create an account. Your account details can matter, as some employers prefer that you meet certain safety requirements. For example, if you don't have a recently valid police check, then you won't have access to jobs which demand that.</p>

            <p>After publishing your profile, you can begin applying to jobs in your area. If you apply, expect to head there as soon as possible; Broomer is about providing instant service!</p>
        </div>
      </div>

    </div>
  )
}

export default AboutUs
