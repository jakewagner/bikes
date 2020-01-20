import React from "react";
import styled from "styled-components";

const FlagImage = styled.img`
  width: 64px;
  height: 64px;
`;

const Flag = ({ country }) => {
  return (
    <FlagImage
      src={`https://www.countryflags.io/${country}/shiny/64.png`}
      alt={country}
    />
  );
};

export default Flag;
