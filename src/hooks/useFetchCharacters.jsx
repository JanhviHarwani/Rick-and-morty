import React from "react";
import { useQuery, gql } from "@apollo/client";
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        image
        name
        species
        id
      }
    }
  }
`;
export function useFetchCharacters() {
  const { data, error, loading } = useQuery(GET_CHARACTERS);
  return {
    data,
    error,
    loading,
  };
}
