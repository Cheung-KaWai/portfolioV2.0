import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTitle>Hi, my name is Ka Wai </HeroTitle>
      <HeroSubtitle>A passionate future front end developer</HeroSubtitle>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      80%,
      rgba(0, 0, 0, 0.3)
    ),
    url("/images/noise.svg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  color: #ced4da;
  font-size: 4.2rem;
  font-weight: 500;
`;

const HeroSubtitle = styled.p`
  padding: 2rem;
`;
