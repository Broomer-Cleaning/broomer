import "./dashboard.css";
import React from "react";
import Calendar from "./calendar/calendar";
import List from "./list/List";
import { Button, Card, CardGroup } from "react-bootstrap";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { tasks } from '@fortawesome/free-solid-svg-icons'

import "bootstrap/dist/css/bootstrap.min.css";

// import { Link } from "react-scroll";
// import Calendar from 'react-calendar';

// import 'react-calendar/dist/Calendar.css';
// import { start } from "@popperjs/core";

const Dashboard = () => {
  // const [date, setDate] = useState(new Date());

  // const onChange = date => {
  //   setDate(date);
  // }
  return (
    <div className="main">
      <div className="rightSide">
        <div>
          {/* <Calendar className="w-100" onChange={onChange} value = {date} /> */}
          <Calendar />
        </div>
        <div className="medSection">
          <div>
            <List />
          </div>
        </div>
        <div className="cardSection">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <div className="task">
                  <Button variant="primary mb=1">Add Task</Button>
                  <Button variant="danger">Delete Task</Button>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
