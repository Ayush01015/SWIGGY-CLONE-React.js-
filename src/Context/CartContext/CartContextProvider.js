import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);
    const [cartItemsCount,setCartItemsCount] = useState(0);
    const addItem = (item) => {
        console.log("added");
        setCartItems([...cartItems,item]);
        setCartItemsCount(cartItemsCount + 1);
    };
    const totalCartPrice = cartItems.reduce((total,item)=>{
            return total+item?.card?.info?.price
    },0)

    return(
        <CartContext.Provider value={{
            cartItems,setCartItems,addItem,cartItemsCount,totalCartPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;


