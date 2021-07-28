// import logo from './logo.svg';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ApolloClient from 'apollo-boost';
import "bootstrap/dist/css/bootstrap.min.css";

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
    <>
     <Navbar/>
     <Dashboard/>
     </>
    </ApolloProvider>
  );
}

export default App;
