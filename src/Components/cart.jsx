import React from "react";
import CartItem from "./cartItem";
import { products } from "../../utils/db.js";
import '../../css/cart.css'

const Cart = ({setTotal}) => {
  let count = 0;
  return (
    <div className="cart">
      <h1>Cart</h1>
      {products.map((product) => {
        if (localStorage.getItem(product._id)) {
          count++;
          return <CartItem item={product} key={product._id} setTotal={setTotal}/>;
        }
      })}
      {count == 0 && <h2>No items in the cart.</h2>}
    </div>
  );
};

export default Cart;
