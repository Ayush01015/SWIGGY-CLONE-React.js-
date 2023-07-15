import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { clearCart } from "../../Utils/Slices/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const index = (id) => {
    //function take id and return index
    // console.log("cartItem",cartItems[0].card.info.price)
    let index = -1;
    cartItems.map((cartItem, i) => {
      if (cartItem.card.info.id === id) {
        index = i;
      }
    });
    return index;
  };

  

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((price, currentValue) => {
    return price + currentValue.card.info.price;
  }, 0);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          <h1>Cart is Empty</h1>
        </div>
      ) : (
        <>
          <div className="cart-container">
            <p className="items-count">{cartItems.length} Items in your cart</p>
            <div className="cart-component">
              {cartItems.map((item) => {
                const idx = index(item.card.info.id)
                {/* console.log("idx", idx); */}
                {/* console.log("ID", item.card.info.id); */}
               return <CartItem {...item.card.info} key={item.card.info.id} id={idx}/>
              })}
              <div>
                <p>{totalPrice}</p>
              </div>
              <div>
                <button className="cart-btn">Pay</button>
                <button className="cart-btn"
                onClick={()=>clearCartItems()}
                >Clear</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
