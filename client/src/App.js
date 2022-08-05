import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MyBar from './pages/MyBar';
import Home from './pages/Home.js';
import Login from './pages/Login';
import Signup from './pages/Signup.js';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mybar" element={<MyBar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;