import "./dashboard.css"
import React  from "react";
// import { Link } from "react-scroll";
// import Calendar from 'react-calendar';
import FullCalendar, {EventInput} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

// import 'react-calendar/dist/Calendar.css';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap'
import profileImg from './img/avatar.jpeg'
// import { start } from "@popperjs/core";

const data:EventInput[] = [
  {
    title:"Clean the hous on cope dr",
    start:"2021-07-01"
    
  },
  {
    title:"we have to code all day",
    start:"2021-07-29"
  },
  {
    title:"we have to code",
    start:"2021-07-29",
    
  },
  {
    title:"we have to code day",
    start:"2021-07-29"
  }
]

const Dashboard = () => {


  // const [date, setDate] = useState(new Date());

  // const onChange = date => {
  //   setDate(date);
  // } 
  return ( 
  <div className = "main">
    <div className = "leftSide">
      <div className="aboutMe">
        <Image src={ profileImg } roundedCircle />
        <div className="descption">
        <h4 className="name">Ahmed Hakeem</h4>
        <p className="about">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
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
      {/* <Calendar className="w-100" onChange={onChange} value = {date} /> */}

      <FullCalendar className="calendar"
      events={data}
      plugins={[dayGridPlugin, timeGridPlugin]}
      />
    </div>
    <div className="medSection">
    <div>
    <FullCalendar className="dayList"
      events={data}
      plugins={[listPlugin]}
      initialView = 'listDay'
      />
    </div>
    <div className="review">
      <h1>review</h1>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard
