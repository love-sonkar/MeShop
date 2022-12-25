import React from "react";
import "./Categorie.css";

const CategorieBadge = ({ CategorieName, categorieClick }) => {
  return (
    <div className="categoriebadge">
      <p onClick={() => categorieClick(CategorieName)}>{CategorieName}</p>
    </div>
  );
};

export default CategorieBadge;
