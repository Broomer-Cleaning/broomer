import "./dashboard.css";
import "./addEvent/addEvent.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import React, { useState, useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import AddJob from "./addEvent/AddJob";
import EditJob from "./addEvent/EditJob";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";

import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";



const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [curentJob, setCurentJob] = useState({
    title: "job title",
    start: "2021-08-04",
    description:"job Descrip"
  });
  const [data, setData] = useState([]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    axios.get("/api/calendar/get-events").then((info) => {
      // setData (oldData)
      setData(info);
    });
  }, []);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      title: event.title,
      description: event.description
    });
  };

  const handleEventClick = ({ event, el }) => {
    setCurentJob(event);
  };

  async function handleEventAdd(data) {
    await axios.post("/api/calendar/create-event", data.event);
  }

  async function handleDateSet(data) {
    const responce = await axios.get(
      "/api/calendar/get-events?start=" + moment(data.start).toISOString()
    );
    setEvents(responce.data);
  }
  const onClose = () => {
    setShowModal(false);
  };

  
  return (
    <div className="main">
      <Container className="boxHedaer">
        <div className="postJobBox">
          <h4>Total of Job Posted</h4>
          <p>50 Jods</p>
        </div>
        <div className="compeletJobBox">
          <h4>Total of Job Completed</h4>
          <p>64 Jods</p>
        </div>
        <div className="incomBox">
          <h4> Total of Income</h4>
          <p>2000 $</p>
        </div>
        <div className="incomBox">
          <h4> Total of Outcome</h4>
          <p>350 $</p>
        </div>
      </Container>
      <div className="rightSide">
        <div className="medSection">
          <div className="listview" id="calender">
            <Container>
              <div
                className="daylist"
              >
                <FullCalendar
                  ref={calendarRef}
                   events={events}
                  className="dayList"
                  plugins={[
                    interactionPlugin,
                    dayGridPlugin,
                    timeGridPlugin,
                    listPlugin,
                    bootstrapPlugin,
                  ]}
                  initialView="listMonth"
                  eventAdd={(event) => handleEventAdd(event)}
                  dateSet={(date) => handleDateSet(date)}
                  themeSystem="bootstrap"
                  eventClick={handleEventClick}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,listDay",
                  }}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  onEventAdded={(event) => onEventAdded(event)}
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
                   <h5>{curentJob.title}</h5> 
                    <p>{curentJob.description}</p>
                    {/* <p>{curentJob.}</p> */}
                    <span>
                      <div className="d-grid gap-2 d-md-block text-center">
                        <Button
                          className="btn-space btn-warning"
                          onClick={openModal}
                        >
                          Edit Job
                        </Button>
                        <EditJob
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                        <Button
                          className="btn-space m-1"
                          variant="danger"
                          onClick={() => this.props.onDelete(this.props.title)}
                        >
                          Delete Job
                        </Button>
                        <Button variant="secondary">Done</Button>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
              <Button onClick={openModal}>Add Job</Button>
              <AddJob
                showModal={showModal}
                onEventAdded={onEventAdded}
                setShowModal={setShowModal}
                onClose={onClose}
              />
            </div>
            <div className="compeletJobBox">
              <h4>Job Completed</h4>
              <div className="JobList">
                <ul>
                  <li>
                    {curentJob.title}
                    <div className="text-center">
                      <Link to="/testimonials">
                      <Button className="btn btn-primary ">Write Review</Button>
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
