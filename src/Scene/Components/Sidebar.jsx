import React, { useState } from "react";
import styled, { css } from "styled-components";

import Flag from "./Flag";

const SidebarContainer = styled.div`
  ${({ theme: { Sidebar } }) => css`
    background: ${Sidebar};   
    display: flex;
    height: 100%;
    width 125px;
    flex-shrink: 0;
    flex-direction: column;
    overflow-y: scroll;
    `};
`;

const ImageContainer = styled.div`
  ${({ theme: { Hover } }) => css`
    width: 100%;
    text-align: center;
    :hover {
      background: ${Hover};
    }
  `}
`;

const Sidebar = ({ countries }) => {
  return (
    <SidebarContainer>
      {countries.map((country, i) => (
        <ImageContainer key={i}>
          <Flag country={country} />
        </ImageContainer>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
