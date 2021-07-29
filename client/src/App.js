// import logo from './logo.svg';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import AboutUs from './components/about/AboutUs';
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
     <Route path="/about" exact component={AboutUs} />
     <Route exact path="/dashboard" component={Dashboard} />
     
     
     </Switch>
     </>
     </Router>
    </ApolloProvider>
  );
}

export default App;
