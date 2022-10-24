import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/categoriesItem.css";

const CategoriesItem = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}`)
  }

  return (
    <div className="item">
      <img src={category.img} />
      <div className="icons">
        <h2>{category.name}</h2>
        <button className="cat-btn" onClick={() => handleClick(category.id)}>Shop Now</button>
      </div>
    </div>
  );
};

export default CategoriesItem;
