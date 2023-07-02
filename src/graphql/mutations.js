/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoche = /* GraphQL */ `
  mutation CreateCoche(
    $input: CreateCocheInput!
    $condition: ModelCocheConditionInput
  ) {
    createCoche(input: $input, condition: $condition) {
      id
      marca
      matricula
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCoche = /* GraphQL */ `
  mutation UpdateCoche(
    $input: UpdateCocheInput!
    $condition: ModelCocheConditionInput
  ) {
    updateCoche(input: $input, condition: $condition) {
      id
      marca
      matricula
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCoche = /* GraphQL */ `
  mutation DeleteCoche(
    $input: DeleteCocheInput!
    $condition: ModelCocheConditionInput
  ) {
    deleteCoche(input: $input, condition: $condition) {
      id
      marca
      matricula
      createdAt
      updatedAt
      __typename
    }
  }
`;
