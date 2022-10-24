import React, { useState } from "react";
import "../../css/product.css";

const Product = ({ product, setTotal }) => {
    let cartItem = localStorage.getItem(product._id);
    const [isCartItem, setCartItem] = useState(cartItem);
    
    const handleAdd = () => {
    cartItem = localStorage.getItem(product._id);
    const cat = product.category_id;
    const id = product.product_id;

    if(cartItem == undefined) {
        localStorage.setItem(product._id, 1);
        setTotal(1);
        setCartItem(true);
    }else {
        const obj = JSON.parse(cartItem);
        let value = parseInt(cartItem);
        console.log('parsed data', obj, cartItem);
        localStorage.setItem(product._id, value+1);
        setTotal(value+1);
        setCartItem(true);
    }

    let total = parseInt(localStorage.getItem("total"));
    localStorage.setItem("total", total+1);


    console.log('click to ho gya hu waise', product.product_id)
  }

  return (
    <div className="product">
      <div className="prod-item">
        <img src={product.img} alt="" />
        <button className="cart-btn" style={isCartItem && {"backgroundColor": "red"}} onClick={handleAdd}>
          Add{isCartItem && "ed"} to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
