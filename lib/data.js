import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl4frm2me0ij301xvexjg7i39/master"
);

const query = gql`
  query Articles {
    articles(orderBy: publishedAt_ASC) {
      slug
      title
      description
      createdAt
      type
      id
    }
  }
`;

const queryArticle = gql`
  query MyQuery($id: ID = "") {
    article(where: { id: $id }) {
      slug
      title
      type
      description
      createdAt
    }
  }
`;

const paths = gql`
  query paths {
    articles(orderBy: publishedAt_DESC) {
      slug
    }
  }
`;

const getId = gql`
  query MyQuery($slug: String = "") {
    articles(where: { slug: $slug }) {
      id
    }
  }
`;

export async function getArticles() {
  const { articles } = await graphcms.request(query);

  return {
    props: {
      articles,
    },
  };
}

export async function getPaths() {
  const { articles } = await graphcms.request(paths);

  const paramPaths = articles.map((slug) => {
    return {
      params: slug,
    };
  });

  return paramPaths;
}

export async function getArticle(id) {
  const variables = { id };
  return await graphcms.request(queryArticle, variables);
}

export async function getArticleBySlug(slug) {
  const variables = { slug };
  const { articles } = await graphcms.request(getId, variables);

  return await getArticle(articles[0].id);
}
