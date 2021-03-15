import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components/macro';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import RocketDetails from './pages/RocketDetails';


function App() {


  return (
    <div className="App">
      <Header />
      <MainContainer>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/rocket/:id" exact component={RocketDetails} />
        </BrowserRouter>
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
