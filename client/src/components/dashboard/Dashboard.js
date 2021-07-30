import "./dashboard.css";
import React from "react";
import Calendar from "./calendar/calendar";
import List from "./list/List";
import { Button, Card } from "react-bootstrap";


const Dashboard = () => {
  return (
    <div className="main">
      <div className="rightSide">
        <div>
          <Calendar />
        </div>
        <div className="medSection">
          <div>
            <List />
          </div>
        </div>
        <div className="cardSection">
          <div className="card">
            <Card className="col-lg-4 col-md-6 col-sm-6">
              <Card.Img variant="top"  />
              <Card.Body>
                <Card.Title>Job Posted</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Job 1</li>
                    <li>Job 2</li>
                    <li>Job 3</li>
                  </ul>
                </Card.Text>
                <div className="task">
                  <Button variant="primary mb=1">Add Job</Button>
                  <Button variant="danger">Delete Job</Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-6 col-sm-6">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Job Completed</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Job 1</li>
                    <li>Job 2</li>
                    <li>Job 3</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" className="col-lg-4 col-md-6 col-sm-6">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Income</Card.Title>
                <Card.Text>Tolal of Income</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
