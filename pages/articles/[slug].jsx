import React from "react";
import { getArticleBySlug, getPaths } from "../../lib/data";
import Layout from "../../components/Home/Layout";

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
  return (
    <Layout>
      <p>{article?.title}</p>
    </Layout>
  );
}
