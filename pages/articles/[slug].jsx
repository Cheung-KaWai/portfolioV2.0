import React from "react";
import { getArticleBySlug, getPaths } from "../../lib/data";
import LayoutArticle from "../../components/Articles/LayoutArticle";
import styled from "styled-components";
import { marked } from "marked";
import styles from "../../styles/Article.module.scss";

export async function getStaticPaths() {
  const paths = await getPaths();
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug);
  return {
    props: article,
  };
}

export default function Article({ article }) {
  const getMarkdownText = () => {
    const rawMarkup = marked(article.description);
    return { __html: rawMarkup };
  };
  return (
    <LayoutArticle>
      <Title>{article?.title}</Title>
      <Date>{article.createdAt.substring(0, 10)}</Date>
      <div
        dangerouslySetInnerHTML={getMarkdownText()}
        className={styles.content}
      />
    </LayoutArticle>
  );
}

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  color: #495057;
`;

const Date = styled.p`
  color: #adb5bd;
  margin-bottom: 5rem;
`;
