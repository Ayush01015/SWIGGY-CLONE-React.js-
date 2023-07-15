import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <span>Cart {cartItems.length}</span>
      {cartItems.length === 0 ? (
        <div style={{ marginTop: "5rem",textAlign:"center" }}>
          <h1>Cart is Empty</h1>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart">
            {cartItems.map((item) => (
              <CartItem {...item.card.info} key={item.card.info.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
