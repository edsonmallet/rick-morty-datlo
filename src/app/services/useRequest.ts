import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient("https://rickandmortyapi.com/graphql");

export const fetchData = async (query: any) => {
  return await graphQLClient.request(query);
};

export const UserQuery = gql`
  query getUser {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
        gender
        image
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;
