import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LinkArticle({ article }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <LinkContainer>
        <LinkText>{article.title}</LinkText>
        <LinkText>
          {new Date(article.createdAt).toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
          })}
        </LinkText>
      </LinkContainer>
    </Link>
  );
}

const LinkContainer = styled.a`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-out;
  border-radius: 3px;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const LinkText = styled.p``;
