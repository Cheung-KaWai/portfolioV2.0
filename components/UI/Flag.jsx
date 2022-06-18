import React from "react";
import styled from "styled-components";

export default function Flag() {
  return (
    <FlagContainer>
      <FlagPart color="rgba(0, 0, 0,0.4)"></FlagPart>
      <FlagPart color="rgba(255, 255, 0,0.4)"></FlagPart>
      <FlagPart color="rgba(255, 0, 0,0.4)"></FlagPart>
    </FlagContainer>
  );
}

const FlagContainer = styled.div`
  display: flex;
  width: 15rem;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const FlagPart = styled.span`
  height: 0.3rem;
  flex: 1 1 0px;
  background-color: ${(props) => props.color};
`;
