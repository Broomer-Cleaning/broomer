import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Dashboard from "./Dashboard";
import RecommendJob from "./RecommendJob";
import ReviweJob from "./reviewJobs";
import "./dashboard.css"

const compainDashboard = () => {
  return (
    <Fragment>
      <Dashboard />
      <Container>
        <ReviweJob />
      </Container>
      <Container>
        <RecommendJob />
      </Container>
    </Fragment>
  );
};

export default compainDashboard;
