import React from "react";
import styled from 'styled-components/macro';

import logo from '../logo.png';

const Header: React.FC = () => {

return (
  <AppHeader>
    <LOGO src={logo} className="App-logo" alt="logo" />
    <SubTitle>SpaceX data</SubTitle>
  </AppHeader>
)
}

export default Header;

const AppHeader = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  padding: 10px 0;
  overflow: hidden;
  position: fixed;

  @media (min-width: 1024px) {
    padding: 20px 0;
  }
`;

const LOGO = styled.img`
  display: block;
  pointer-events: none;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 22%;
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;
  margin: 10px 0 6px 0;

  @media (min-width: 1024px) {
    font-size: 18px;
    margin: 16px 0 4px 0;
  }
`;