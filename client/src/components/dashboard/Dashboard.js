import "./dashboard.css"
import React from "react";
// import { Link } from "react-scroll";
import { Button } from 'react-bootstrap';
// import { Image } from 'react-bootstrap'
// import profileImg from './public/img/avatar.jpeg'

const Dashboard = () => {
  return ( 
  <div className = "main">
    <div className = "leftSide">
      <div className="aboutMe">
        {/* <Image src={ profileImg } roundedCircle /> */}
        <div className="img">
          
        </div>
        <h4 className="name">Ahmed Hakeem</h4>
        <p className="about">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="task">
        <h4 className="pTask">Task Posted: </h4>
        <h4 className="cTask">Task Completed:</h4>
        <h4 className="income">Income: $</h4>
        <Button variant="primary">Add Task</Button>{' '}
      </div>
    </div> 
  <div className = "rightSide">
      <div className="calender">
        <h1>calender</h1>
      </div>
      <div className="todayTask">
        <h1>today task</h1>
      </div>
      <div className="review">
        <h1>review</h1>
      </div>
     </div>
  </div>
  );
}

export default Dashboard
