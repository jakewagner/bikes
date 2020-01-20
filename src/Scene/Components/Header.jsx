import React, { useState } from "react";
import styled, { css } from "styled-components";

import Flag from "./Flag";

const HeaderContainer = styled.div`
  ${({ theme: { Header } }) => css`
    background: ${Header};
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
  `};
`;

const Header = ({ selectedCountry }) => {
  return (
    <HeaderContainer>
      <Flag country={selectedCountry} />
    </HeaderContainer>
  );
};

export default Header;
