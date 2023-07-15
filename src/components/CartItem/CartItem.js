import { useSelector, useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../constants";
import { removeItem } from "../../Utils/Slices/CartSlice";
import "./CartItem.css"

const CartItem = ({name,price,imageId,id}) =>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const removeCartItem = (id)=>{
        dispatch(removeItem(id));
        console.log("click",id);
    }
    return(
        <div className="cart-item">
            <div className="cart-item-sec-1">
                <p className="cart-item-name">{name}</p>
                <p className="cart-item-price">₹{price===NaN?1110:(price / 100)}</p>
            </div>
            <div className="cart-item-sec-2">
        <img src={IMG_CDN_URL + imageId} alt=""/>
        {/* {id} */}
        {/* <button className="cart-item-btn" onClick={()=>removeCartItem(id)}>Remove</button> */}
    </div>
</div>
    )
} 

export default CartItem;
