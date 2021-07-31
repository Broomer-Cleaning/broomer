import "./dashboard.css";
import React from "react";
import List from "./list/List";
import { Button, Container, Nav } from "react-bootstrap";

const Dashboard = () => {
  const handleCilck = () => {
    console.log("Hello Ahmed");
  };

  return (
    <div className="main">
      <Container className="boxHedaer">
        <div className="postJobBox">
          <h4>Total of Jod Posted</h4>
          <p> Jods</p>
        </div>
        <div className="compeletJobBox">
          <h4>Total of Jod Completed</h4>
          <p> Jods</p>
        </div>
        <div className="incomBox">
          <h4> Total of Income</h4>
          <p> $</p>
        </div>
        <div className="incomBox">
          <h4> Total of Outcome</h4>
          <p> $</p>
        </div>
      </Container>
      <div className="rightSide">
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
              <div className="JobList">
                <ul>
                  <li>
                    Job Tital{" "}
                    <span>
                      <Button onClick={handleCilck} variant="warning">
                        Edit Job
                      </Button>{" "}
                      <Button variant="danger">Delete Job</Button>{" "}
                      <Button variant="secondary">Done</Button>
                    </span>
                  </li>
                </ul>
              </div>
              <Button>Add Job</Button>
            </div>
            <div className="compeletJobBox">
              <h4>Jod Completed</h4>
              <div className="JobList">
                <ul>
                  <li>
                    Job Tital{" "}
                    <span>
                      <Button variant="info">Write Review</Button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
