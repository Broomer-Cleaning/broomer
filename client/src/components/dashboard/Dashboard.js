import "./dashboard.css";
// import "./addEvent/addEvent.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import React, {
  // useState,
  //  useRef,
} from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS } from "../../utils/queries"

// Calendar Plugin
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";



const Dashboard = () => {

  const { loading, data } = useQuery(GET_ALL_JOBS);
  // let allJobData = "";
  const allJobData = data?.jobs || {};

  if (loading) {
    console.log("Loading");
  } else {
    console.log(allJobData);
  }

  return (
    <div className="main">
      <Container className="boxHedaer">
        <div className="postJobBox">
          <h4>Total of Job Posted</h4>
          <p>{allJobData.length} Jobs</p>
        </div>
        <div className="compeletJobBox">
          <h4>Job Completed</h4>
          <p>{allJobData.length} Jobs</p>
        </div>
        {/* <div className="incomBox">
          <h4> Total of Income</h4>
          <p>2000 $</p>
        </div>
        <div className="incomBox">
          <h4> Total of Outcome</h4>
          <p>350 $</p>
        </div> */}
      </Container>
      <div className="rightSide">
        <div className="medSection">
          <div className="listview" id="calender">
            <Container>
              <div className="daylist">
                <FullCalendar
                  className="dayList"
                  plugins={[
                    interactionPlugin,
                    dayGridPlugin,
                    timeGridPlugin,
                    listPlugin,
                    bootstrapPlugin,
                  ]}
                  initialView="listMonth"
                  themeSystem="bootstrap"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,listDay",
                  }}
                />
              </div>
            </Container>
          </div>
        </div>
        <div>
          <Container className="boxSection">
            <div className="postJobBox">
              <h4>Job Posted</h4>
              <div className="JobList">
                <ul>
                  <li>
                    {allJobData.Dashboard?.map((jobs) => {
                      return(
                        <>
                        <h5 key={jobs._id}>{jobs.title}</h5>
                        <p>{jobs.job_description}</p>
                        </>
                      )
                    })}
                    <span>
                      <div className="d-grid gap-2 d-md-block text-center">
                        <Button
                          className="btn-space btn-warning"
                        >
                          Edit Job
                        </Button>

                        <Button
                          className="btn-space m-1"
                          variant="danger"
                        >
                          Delete Job
                        </Button>
                        <Button variant="secondary">Done</Button>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
              <Link to="/addJob">
                <Button>Add Job</Button>
              </Link>
            </div>
            <div className="compeletJobBox">
              <h4>Job Completed</h4>
              <div className="JobList">
                <ul>
                  <li>
                    <div className="text-center">
                      <Link to="/testimonials">
                        <Button className="btn btn-primary ">
                          Write Review
                        </Button>
                      </Link>
                    </div>
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
