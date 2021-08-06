import "./dashboard.css";
// import "./addEvent/addEvent.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import React from // useState,
//  useRef,
"react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { DONE_NO_REVIEWS } from "../../utils/queries";

const ReviweJob = () => {


    const { loading, data } = useQuery( DONE_NO_REVIEWS );
    let reviweJob ="";
  if (loading) {
    console.log("Loading");
  } else {
     reviweJob = data?.pullOpenJobs|| {};
    console.log( reviweJob );
  }

  return (
    <div className="compeletJobBox">
              <h4>Job Completed</h4>
              <div className="JobList">
                <ul>
                  <li>
                    <h4>{reviweJob.title}</h4>
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
  );
};

export default ReviweJob;