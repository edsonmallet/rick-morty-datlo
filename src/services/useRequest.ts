import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient("https://rickandmortyapi.com/graphql", {
  errorPolicy: "all",
});

type FetchDataProps<T> = {
  query: string;
  page?: number;
  search?: string | number | null;
};

export const fetchData = async <T>({
  query,
  page = 1,
  search,
}: FetchDataProps<T>) => {
  const variables = { page, search };
  if (!search) delete variables?.search;

  return await graphQLClient.request<T>(query, variables);
};

export const getCharacters = gql`
  query getCharacters($page: Int!, $search: String) {
    characters(page: $page, filter: { name: $search }) {
      info {
        count
      }
      results {
        id
        name
        gender
        image
        status
        species
      }
    }
  }
`;

export const getCharacterById = gql`
  query getCharacterById($search: ID!) {
    character(id: $search) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
      }
      location {
        name
        type
        dimension
      }
      image
      episode {
        name
        air_date
        episode
      }
    }
  }
`;
