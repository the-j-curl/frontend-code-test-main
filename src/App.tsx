import React from 'react';
import styled from 'styled-components/macro';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

const App: React.FC = () => {

  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Home />
      </MainContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  text-align: center;
`;

const MainContainer = styled.main`
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
