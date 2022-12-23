import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import css from "./IndividualCharacter.module.css";
const GET_INDIVIDUAL_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      origin {
        dimension
      }
      type
      episode {
        name
      }
      image
    }
  }
`;
function IndividualCharacter() {
  let urlId = useParams();
  const { error, loading, data } = useQuery(GET_INDIVIDUAL_CHARACTER, {
    variables: {
      id: urlId?.id,
    },
  });
  if (error) return <h2>{error?.message}</h2>;
  else if (loading) return <h4>Loading...</h4>;
  else
    return (
      <div className={css.individualMainContainer}>
        <div className={css.individualContainer}>
          <h3 className={css.title}>Name:</h3>
          <p className={css.content} style={{ fontSize: "18px" }}>
            <b>
              <u>{data?.character?.name ? data?.character?.name : "Null"}</u>
            </b>
          </p>
        </div>
        <div className={css.individualContainer}>
          <h3 className={css.title}>Status:</h3>
          <p className={css.content}>
            {data?.character?.status ? data?.character?.status : "Null"}
          </p>
        </div>
        <div className={css.individualContainer}>
          <h3 className={css.title}>Dimension:</h3>
          <p className={css.content}>
            {data?.character?.origin?.dimension
              ? data?.character?.origin?.dimension
              : "Null"}
          </p>
        </div>
        <div className={css.individualContainer}>
          <h3 className={css.title}>Type:</h3>
          <p className={css.content}>
            {data?.character?.type ? data?.character?.type : "Null"}
          </p>
        </div>
        <div className={css.individualContainerEpisode}>
          <h3>Episodes:</h3>

          {data?.character?.episode?.map((obj) => (
            <li key={obj.name}>{obj?.name}</li>
          ))}
        </div>
        <div className={css.individualContainerEpisode}>
          <Link to="/">Go back Home</Link>
        </div>
      </div>
      /* <div style={{ flexBasis: "40%" }}>
        <img src={data?.character?.image} alt={data?.character?.name} />
      </div> */
      // </div>
    );
}

export default IndividualCharacter;
