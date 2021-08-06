// import logo from './logo.svg';
import React from 'react';
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import AboutUs from './components/about/AboutUs';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Profile from './components/profile/Profile'
import Testimonials from './components/reviews/Testimonials';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Footer from './components/footer/Footer';
import AddJobform from './components/dashboard/form/AddJobform';

import "bootstrap/dist/css/bootstrap.min.css";

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
     <Route exact path="/profile" component={Profile} />
     <Route exact path="/testimonials" component={Testimonials} />
     <Route exact path="/addJob" component={AddJobform} />
     </Switch>
     <Footer/>
      </>
     
     </Router>
    
    </ApolloProvider>
  );
}

export default App;
