import React from 'react';
import { Fragment } from 'react';
import Header from '../header/Header';
import Reviews from '../reviews/Reviews';
import Services from '../services/Services';

const Home = () => {
  return (
  <Fragment>
    <Header/>
    <Services/>
    <Reviews/>
  </Fragment>
  )
}

export default Home
