import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../../Context/CartContext/CartContext";

const Cart = () => {
  const { cartItems,totalCartPrice } = useContext(CartContext);
  console.log("cartItem  123", cartItems);
  return (
    <div className="cart">
      {cartItems?.length === 0 ? (
        <div style={{ marginTop: "20%", textAlign: "center" }}>
          <h1>Cart is Empty</h1>
        </div>
      ) : (
        <>
          <div className="cart-container">
            <p className="items-count">{cartItems.length} Items in your cart</p>
            <div className="cart-component">
              {cartItems.map((item, i) => {
                return (
                  <CartItem
                    {...item?.card?.info}
                    key={item?.card?.info?.id}
                    id={i}
                  />
                );
              })}
              <div>
                <p
                  style={{
                    margin: "1rem 0",
                    fontSize: "1.5rem",
                  }}
                >
                  TOTAL: ₹{`${totalCartPrice}` / 100}
                </p>
              </div>
              <div>
                <button className="cart-btn">Pay</button>
                <button className="cart-btn">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
