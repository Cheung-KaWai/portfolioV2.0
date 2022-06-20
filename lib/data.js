import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl4frm2me0ij301xvexjg7i39/master"
);

const query = gql`
  query MyQuery($orderBy: ArticleOrderByInput = publishedAt_DESC) {
    articles(orderBy: $orderBy) {
      publishedAt
      title
      type
      description
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
