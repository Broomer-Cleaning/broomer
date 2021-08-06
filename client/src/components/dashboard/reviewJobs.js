import "./dashboard.css";
// import "./addEvent/addEvent.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import React from // useState,
//  useRef,
"react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { JOBS_ON_MARKET } from "../../utils/queries";

const ReviweJob = () => {


    const { loading, data } = useQuery( JOBS_ON_MARKET );
    let openJob ="";
  if (loading) {
    console.log("Loading");
  } else {
     openJob = data?.pullOpenJobs|| {};
    console.log( openJob );
  }



  return (
    <div className="compeletJobBox">
      <h4>Reviwe Job</h4>
      <div className="JobList">
        <ul>
          <li>
            <div className="text-center">
              <Button className="btn btn-primary ">Accept Job</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReviweJob;