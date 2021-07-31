import "./dashboard.css";
import React from "react";
import Calendar from "./calendar/calendar";
import List from "./list/List";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/card";

const Dashboard = () => {
  return (
    <div className="main">
      <div className="rightSide">
        <div>
          <Container>
            <Calendar />
          </Container>
        </div>
        <div className="medSection">
          <div className="listview">
            <Container>
              <List />
            </Container>
          </div>
        </div>
        <div>
          <Container className="boxSection">
            <div className="postJobBox">
              <h4>Jod Posted</h4>
            </div>
            <div className="compeletJobBox">
              <h4>Jod Completed</h4>
            </div>
            <div className="incomBox">
              <h4>Income</h4>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
