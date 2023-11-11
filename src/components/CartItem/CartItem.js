import { useSelector, useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../constants";
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartItem.css";

const CartItem = ({ name, price, imageId, id }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-sec">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">₹{price === NaN ? 1110 : price / 100}</p>
      </div>
      <div className="cart-item-img">
        <img src={IMG_CDN_URL + imageId} alt="" />
        {/* {id} */}
        <DeleteIcon className="delete-item" color="warning"
        />
      </div>
    </div>
  );    
};

export default CartItem;
