import "./dashboard.css";
// import "./addEvent/addEvent.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import React from "react"; //  useRef, // useState,
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { JOBS_ON_MARKET } from "../../utils/queries";

const RecommendJob = () => {
  const { loading, data } = useQuery(JOBS_ON_MARKET);
  const openJob = data?.pullOpenJobs || [];

  if (loading) {
    console.log("Loading");
  } else {
    console.log(openJob);
  }

  return (
    <div className="compeletJobBox">
      <h4>Recommend Job</h4>
      <div className="JobList">
        <ul>
          {openJob.map((pullOpenJobs) => {
            return (
              <li>
                <h5 key={pullOpenJobs._id}>{pullOpenJobs.title}</h5>
                <p>{pullOpenJobs.job_description}</p>
                <div className="text-ceter">
                  <Button className="btn btn-primary ">Accept Job</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecommendJob;
