import React from "react";
import styled from "styled-components";
import Menu from "../Menu/Menu";

export default function LayoutArticle({ children }) {
  return (
    <Container>
      <Menu />
      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const ContainerContent = styled.div`
  width: 100rem;
  padding: 10rem 5rem;
`;
