import "./dashboard.css";
import "./addEvent/addEvent.css";
import React, { useState, useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import AddJob from "./addEvent/AddJob";
import EditJob from "./addEvent/EditJob";

import "react-datetime/css/react-datetime.css";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import Modal from "./addEvent/AddJob";
import axios from "axios";
import moment from "moment";

const oldData = [
  {
    title: "Clean the hous on cope dr",
    start: "2021-08-02",
  },
  {
    title: "we have to code all day",
    start: "2021-08-03",
  },
  {
    title: "we have to code",
    start: "2021-08-04",
  },
  {
    title: "we have to code day",
    start: "2021-08-06",
  },
];

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [curentJob, setCurentJob] = useState({
    title: "job title",
    start: "2021-08-04",
  });
const [data, setData] = useState ([])

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  
  useEffect(() => {
  axios.get("/api/calender/get-events").then(info => {
    // setData (oldData)
   setData (info)
  })  

  },[]);
  
  
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  const handleEventClick = ({ event, el }) => {
    console.log(event);
    setCurentJob(event);
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
  const onClose = () => {
    setShowModal(false);
  };

  const deleteJob = (id) =>  {
    this.setState((prevState) => ({
        job: prevState.job.filter(item => item.id !== id),
    }))
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
              <div className="daylist">
                <FullCalendar
                  ref={calendarRef}
                  events={data}
                  className="dayList"
                  plugins={[listPlugin]}
                  initialView="listMonth"
                  eventAdd={(event) => handleEventAdd(event)}
                  dateSet={(date) => handleDateSet(date)}
                  eventClick={handleEventClick}
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
              <h4>Job Posted</h4>
              <div className="JobList">
                <ul>
                  <li>
                    {curentJob.title}
                    <span>
                      <div>
                        <Button onClick={openModal} >Edit Job</Button>
                        <EditJob
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                      </div>

                      <Button  variant="danger" onClick={() => this.props.onDelete(this.props.title)}>Delete Job</Button>
                      <Button variant="secondary">Done</Button>
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
                    Job Title{" "}
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
