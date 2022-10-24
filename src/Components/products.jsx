import React from "react";
import { useParams } from "react-router-dom";
import { products, categories } from "../../utils/db.js";
import Product from "./product.jsx";
import "../../css/products.css";

const Products = ({setTotal}) => {
  const { id } = useParams();

  const name = categories[id - 1].name;
  let count = 0;
  return (
    <div className="prod-container">
      <h1>{name}</h1>
      <div className="products">
        {products.map((product) => {
          count++;
          return (
            product.category_id == id && (
              <Product product={product} key={product.product_id} setTotal={setTotal}/>
            )
          );
        })}
        {count == 0 && <h2>No items found.</h2>}
      </div>
    </div>
  );
};

export default Products;
