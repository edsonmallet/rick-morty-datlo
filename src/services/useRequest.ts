import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient("https://rickandmortyapi.com/graphql", {
  errorPolicy: "all",
});

type FetchDataProps = {
  query: string;
  page: number;
  search?: string;
};

export const fetchData = async ({
  query,
  page = 1,
  search,
}: FetchDataProps) => {
  const variables = { page, search };
  if (!search) delete variables?.search;

  return await graphQLClient.request(query, variables);
};

export const getCharacters = gql`
  query getCharacters($page: Int!, $search: String) {
    characters(page: $page, filter: { name: $search }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        gender
        image
        status
      }
    }
  }
`;
