import React from "react";
import CategoriesItem from "./categoriesItem";
import { categories } from "../../utils/db.js";
import "../../css/categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <header className="categories-header">
        <h1>Categories</h1>
      </header>
      <div className="cat-items">
        { categories.map(category => {
            return <CategoriesItem category={category} />
          })
        }
      </div>
    </div>
  );
};

export default Categories;
