import "./dashboard.css";
import "./addEvent/addEvent.css";
import React, { useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import AddJob from "./addEvent/AddJob";
import EditJob from "./addEvent/EditJob";

import "react-datetime/css/react-datetime.css";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import Modal from "./addEvent/AddJob";
import axios from "axios";
import moment from "moment";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  async function handleEventAdd(data) {
    await axios.post("/api/calenar/create-event", data.event);
  }

  async function handleDateSet(data) {
    const responce = await axios.get(
      "/api/calendar/get-events?start=" +
        moment(data.start).toISOString() +
        "&end=" +
        moment(data.end).toISOString()
    );
    setEvents(responce.data);
  }

  return (
    <div className="main">
      <Container className="boxHedaer">
        <div className="postJobBox">
          <h4>Total of Jod Posted</h4>
          <p>50 Jods</p>
        </div>
        <div className="compeletJobBox">
          <h4>Total of Jod Completed</h4>
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
              <div className="daylist">
                <FullCalendar
                  ref={calendarRef}
                  events={events}
                  className="dayList"
                  plugins={[listPlugin]}
                  initialView="listMonth"
                  eventAdd={(event) => handleEventAdd(event)}
                  dateSet={(date) => handleDateSet(date)}
                />
              </div>

              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                onEventAdded={(event) => onEventAdded(event)}
              />
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
                    Job Tital
                    <span>
                      <div>
                        <Button onClick={openModal}>Edit Job</Button>
                        <EditJob
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                      </div>

                      <Button variant="danger">Delete Job</Button>
                      <Button variant="secondary">Done</Button>
                    </span>
                  </li>
                </ul>
              </div>
              <Button onClick={openModal}>Add Job</Button>
              <AddJob showModal={showModal} setShowModal={setShowModal} />
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
