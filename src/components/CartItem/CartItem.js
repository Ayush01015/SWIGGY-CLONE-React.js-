import { IMG_CDN_URL } from "../../constants";
import "./CartItem.css"

const CartItem = ({name,defaultPrice,imageId}) =>{
    return(
        <div className="cart-item">
            <div className="cart-item-sec-1">
                <p className="cart-item-name">{name}</p>
                <p className="cart-item-price">₹{"Nan"?"1110":(defaultPrice / 100)}</p>
            </div>
            <div className="cart-item-sec-2">
                <img src={IMG_CDN_URL + imageId} alt=""/>
            </div>
        </div>
    )
}

export default CartItem;
