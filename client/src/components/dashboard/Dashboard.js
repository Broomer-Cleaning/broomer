import "./dashboard.css"
import React , {useState} from "react";
// import { Link } from "react-scroll";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap'
import profileImg from './img/avatar.jpeg'

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  } 
  return ( 
  <div className = "main">
    <div className = "leftSide">
      <div className="aboutMe">
        <Image src={ profileImg } roundedCircle />
        <div className="descption">
        <h4 className="name">Ahmed Hakeem</h4>
        <p className="about">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
      </div>
      <div className="task">
        <h4 className="pTask">Task Posted: 6 </h4>
        <h4 className="cTask">Task Completed: 30</h4>
        <h4 className="income">Income: 1500$</h4>
        <Button className="mb-1" variant="primary mb=5">Add Task</Button>{' '}
        <Button variant="danger">Delete Task</Button>{' '}
      </div>
    </div> 
  <div className = "rightSide">
    <div>
      <Calendar className="w-100" onChange={onChange} value = {date} />
    </div>

  </div>
</div>
  );
}

export default Dashboard
