import React from "react";
import styled, { keyframes } from "styled-components";
import Flag from "../UI/Flag";
import useWindowSize from "../UI/useWindowSize";

export default function Hero({ id }) {
  const [width, height] = useWindowSize();
  return (
    <HeroContainer id={id}>
      <HeroTitle width={width}>Hi, my name is Ka Wai </HeroTitle>
      <HeroSubtitle width={width}>
        A passionate future front end developer
      </HeroSubtitle>
      <Flag />
      {/* <Scroll /> Not sure if i want to keep it */}
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  max-width: 100%;
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

const scroll = keyframes`
  to{
    top: 24px;
  }
`;

const HeroTitle = styled.h1`
  transform: translateY(-10px);
  opacity: 0;
  color: #ced4da;
  font-size: ${(props) => (props.width < 600 ? "2.8rem" : "4.2rem")};
  font-weight: 500;
  animation: ${slide} 1s ease-out forwards;
`;

const HeroSubtitle = styled.p`
  padding: 2rem;
  opacity: 0;
  animation: ${appear} 1s 1s ease-out forwards;
  font-size: ${(props) => (props.width < 600 ? "1.4rem" : "1.6rem")};
`;

const Scroll = styled.div`
  width: 2rem;
  height: 4rem;
  border: 2px solid;
  border-radius: 20px;
  position: relative;

  ::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #f03e3e;
    position: absolute;
    left: 50%;
    top: 7px;
    transform: translateX(-50%);
    animation: ${scroll} 1s 2s ease-in-out forwards;
  }
`;
