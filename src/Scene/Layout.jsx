import React, { useState } from "react";
import styled, { css } from "styled-components";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

const LayoutContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Body = styled.div`
  ${({ theme: { DarkBackground } }) => css`
    background: ${DarkBackground};
    display: flex;
    width: 100%;
    height: 100%;
  `}
`;

const Layout = ({ appData }) => {
  const [countries, setCountries] = useState(Object.keys(appData.country));
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  console.log(appData);
  return (
    <LayoutContainer>
      <Sidebar countries={countries} />
      <Content>
        <Header selectedCountry={selectedCountry}></Header>
        <Body></Body>
      </Content>
    </LayoutContainer>
  );
};

export default Layout;
