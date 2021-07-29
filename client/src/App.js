// import logo from './logo.svg';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import AboutUs from './components/about/AboutUs';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
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
     <Route path="/" exact component={Home} />
     {/* <Route path="/" exact component={Reviews} /> */}
     <Route exact path="/about" component={AboutUs} />
     <Route exact path="/services" component={Services} />
     <Route exact path="/dashboard" component={Dashboard} />
     <Route exact path="/contact" component={Contact} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/signup" component={Signup} />
     </Switch>
     <Footer/>
      </>
     
     </Router>
    
    </ApolloProvider>
  );
}

export default App;
