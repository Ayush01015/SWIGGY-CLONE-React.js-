import { useSelector, useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../constants";
import DeleteIcon from "@mui/icons-material/Delete";
import DarkModeContext from "../../Context/DarkModeContext/DarkModeContext";
import Skeleton from "@mui/material/Skeleton";
import { useContext } from "react";
import "./CartItem.css";
import { removeItem } from "../../Utils/Slices/CartSlice";

const CartItem = ({ name, price, imageId, defaultPrice, id }) => {
  const { darkModeEnable } = useContext(DarkModeContext);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  
  const handleRemoveItem = (id) => {
    const idx = cartItems.findIndex(item => item?.card?.info?.id === id);
    if (idx !== -1) {
      dispatch(removeItem(idx));
    }
  };


  return (
    <div className="cart-item">
      <div className="cart-item-sec">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">
          ₹{price === undefined ? defaultPrice / 100 : price / 100}
        </p>
      </div>
      <div className="cart-item-img">
        {imageId !== undefined ? (
          <img src={IMG_CDN_URL + imageId} alt="" />
        ) : (
          <Skeleton
            variant="rounded"
            height="9vh"
            width="100%"
            sx={{ borderRadius: "10px" }}
          />
        )}

        {/* {id} */}
        <div className={`del-icon ${darkModeEnable ? "bg-white" : "bg-dark"}`}>
          <DeleteIcon
            className="delete-item"
            sx={{
              width: { xs: 20, sm: 120, md: 140 }, // Adjust sizes based on breakpoints
            }}
            onClick={()=>handleRemoveItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
