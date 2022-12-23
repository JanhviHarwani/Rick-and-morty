import React from "react";
import css from "../components/StructureOfCharactersList.module.css";
import { Link } from "react-router-dom";
function Card({ title, image, species, id }) {
  // const navigate = useNavigate();
  return (
    <div className={css.customized_card} key={id}>
      <img
        src={image}
        alt={title}
        height={"200px"}
        width={"200px"}
        className={css.picture}
      />
      <h2 className={css.card_heading}>{title}</h2>
      <h5 className={css.species}>{species}</h5>
      <Link to={`/${id}`} style={{ cursor: "pointer" }}>
        Click to view more!
      </Link>
    </div>
  );
}

export default Card;
