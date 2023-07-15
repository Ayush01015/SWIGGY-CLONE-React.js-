import { IMG_CDN_URL } from "../../constants";
import "./CartItem.css"

const CartItem = ({name,defaultPrice}) =>{
    return(
        <div className="cart-item">
            <div className="cart-item-sec-1">
                <p className="cart-item-name">{name}</p>
                <p className="cart-item-price">₹{"Nan"?"1110":(defaultPrice / 100)}</p>
            </div>
            <div className="cart-item-sec-2">
                <img src={IMG_CDN_URL + "1a14fabe23a03b7248d11b17a80caeee"} alt=""/>
            </div>
        </div>
    )
}

export default CartItem;
