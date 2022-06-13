import React from "react";
import styled from "styled-components";

export default function Articles() {
  return (
    <ArticlesContainer>
      <ArticlesContent>
        <ArticlesTitle>Articles</ArticlesTitle>
        <Articlesubtitle>- Documenting my learning journey</Articlesubtitle>
      </ArticlesContent>
    </ArticlesContainer>
  );
}

const ArticlesContainer = styled.section`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #e9ecef;
`;

const ArticlesContent = styled.div`
  width: 100rem;
  height: 100%;
  padding: 10rem 0;
`;

const ArticlesTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #495057;
  position: relative;
`;

const Articlesubtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;
