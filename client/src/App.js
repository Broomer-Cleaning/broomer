// import logo from './logo.svg';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import AboutUs from './components/about/AboutUs';
import Reviews from './components/reviews/Reviews';
import ReviewsCarousel from './components/reviews/ReviewsCarousel';
import Footer from './components/footer/Footer';
import ApolloClient from 'apollo-boost';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <>
     <Navbar/>
     <Switch>
     <Route path="/" exact component={Header} />
     <Route path="/" exact component={Reviews} />
     <Route exact path="/about" component={AboutUs} />
     <Route exact path="/dashboard" component={Dashboard} />
     </Switch>
     <Footer/>
     </>
     </Router>
    </ApolloProvider>
  );
}

export default App;
