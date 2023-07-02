/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoche = /* GraphQL */ `
  query GetCoche($id: ID!) {
    getCoche(id: $id) {
      id
      marca
      matricula
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCoches = /* GraphQL */ `
  query ListCoches(
    $filter: ModelCocheFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        marca
        matricula
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
