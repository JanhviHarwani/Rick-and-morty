import React, { useEffect, useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import Layout from "./Layout";
import Card from "./StructureOfCharactersList";

function CharactersList() {
  const [charactersList, setCharacters] = useState([]);
  const { error, loading, data } = useFetchCharacters();
  useEffect(() => {
    setCharacters(data?.characters?.results);
  }, [data?.characters?.results]);
  if (error) return <h2>{error?.message}</h2>;
  else if (loading) return <h4>Loading...</h4>;
  else
    return (
      <Layout>
        {charactersList?.map((character) => (
          <Card
            key={character?.id}
            id={character?.id}
            title={character?.name}
            image={character?.image}
            species={character?.species}
          />
        ))}
      </Layout>
    );
}

export default CharactersList;
