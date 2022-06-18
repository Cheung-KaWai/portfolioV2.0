import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";

export default function Layout({ children }) {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
`;
