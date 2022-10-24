import React, { useState } from "react";
import '../../css/cartItem.css'

const CartItem = ({item, setTotal}) => {
    const [quantity, setQuantity] = useState(localStorage.getItem(item._id));

    const handleMinus = () => {
        // let value = parseInt(localStorage.getItem(item._id))
        let value = parseInt(quantity)
        if(value == 1) return;
        value--;
        setQuantity(value);

        localStorage.setItem(item._id, value);
    }

    const handlePlus = () => {
        let value = parseInt(quantity)
        value++;

        setQuantity(value);

        localStorage.setItem(item._id, value);
    }

    const handleRemove = () => {
        localStorage.removeItem(item._id);
        setTotal(total =>  total - 1);
        localStorage.setItem("total", localStorage.getItem("total") - 1);
    }

  return (
    <div className="cart-items">
      <p className="name-span">{item.name}</p>
      <p className="price">${item.price * quantity}</p>
      <p className="quantity">{quantity}</p>
      <p className="minus same-btn" onClick={handleMinus}>-</p>
      <p className="plus same-btn" onClick={handlePlus}>+</p>
      <p  className="delete" onClick={handleRemove}>Remove</p>
    </div>
  );
};

export default CartItem;
