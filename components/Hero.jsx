import React from "react";
import styled, { keyframes } from "styled-components";

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

const slide = keyframes`
  to {
    transform: translateY(10px);
    opacity: 1;
  }
`;

const appear = keyframes`
  to {
    opacity: 1;
  }
`;

const HeroTitle = styled.h1`
  transform: translateY(-10px);
  opacity: 0;
  color: #ced4da;
  font-size: 4.2rem;
  font-weight: 500;
  animation: ${slide} 1s ease-out forwards;
`;

const HeroSubtitle = styled.p`
  padding: 2rem;
  opacity: 0;
  animation: ${appear} 1s 1s ease-out forwards;
`;
