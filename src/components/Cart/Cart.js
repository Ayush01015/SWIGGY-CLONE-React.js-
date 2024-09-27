import React, { useEffect,useState } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../../Context/CartContext/CartContext";
import Img from "../../assets/img/cart-zero-.png"
import {useSelector,useDispatch} from "react-redux"
import { clearCart } from "../../Utils/Slices/CartSlice";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  // const { cartItems,totalCartPrice } = useContext(CartContext);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalCartPrice = cartItems.reduce((total,item)=>{
    return total+(item?.card?.info?.price === undefined ? item?.card?.info?.defaultPrice:item?.card?.info?.price);
  },0) 

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart">
      {cartItems?.length === 0 ? (
        <div className="empty-cart">
          <h1>Cart is Empty</h1>
          <img src={Img}/>
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
                    key={uuidv4()}
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
                <button className="cart-btn"
                  onClick={()=>handleClearCart()}
                >
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
