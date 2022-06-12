import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
