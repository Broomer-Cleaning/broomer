import React from 'react'
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Dashboard from './Dashboard';
import RecommendJob from './RecommendJob';


const compainDashboard = () => {

    return (

        <Fragment>
            <Dashboard/>
            <Container>
            <RecommendJob/>
            </Container>
        </Fragment>
    )

}

export default compainDashboard;
   