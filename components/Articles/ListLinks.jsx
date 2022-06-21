import React from "react";
import styled from "styled-components";
import LinkArticle from "./LinkArticle";

export default function ListLinks({ articles }) {
  return (
    <ListContainer>
      {articles.map((article, index) => (
        <LinkArticle article={article} key={index} />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
