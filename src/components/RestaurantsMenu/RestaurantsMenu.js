import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import ShimmerMenu from "../ShimmerMenu";
import useRestaurants from "../../Utils/useRestaurant";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yellow, amber } from "@mui/material/colors";
import "./RestaurantsMenu.css";
import Accordian from "../Accordian/Accordian";
import Skeleton from "@mui/material/Skeleton";
import { useContext } from "react";
import { useDispatch } from "react-redux";

const theme = createTheme({
  palette: {
    primary: yellow,
    secondary: amber,
  },
});

const RestaurantsMenu = () => {
  const { id } = useParams();
  
  const restaurant = useRestaurants(id);
  const restaunrantItem =
    restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR ||
    restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log("RestaurantsMenu JSON", restaunrantItem);
  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className="restraunt-menu">
      <div className="menu-container">
        <div className="menu-header">
          <div className="menu-head">
            <div className="menu-header-img">
              <img
                src={
                  IMG_CDN_URL +
                  restaurant?.cards?.[0]?.card?.card?.info?.cloudinaryImageId
                }
                alt="resImg"
              />
            </div>
            <div className="header-info">
              <div className="menu-head-content">
                <p className="res-menu-itm res-name">
                  {restaurant?.cards?.[0]?.card?.card?.info?.name}
                </p>
                <p className="res-menu-itm">
                  {restaurant?.cards?.[0]?.card?.card?.info?.cuisines?.join(
                    ", "
                  )}
                </p>
                <p className="res-menu-itm">
                  {restaurant?.cards?.[0]?.card?.card?.info?.areaName}
                </p>
                <p className="res-menu-itm">
                  {restaurant?.cards?.[0]?.card?.card?.info?.city}
                </p>
              </div>
            </div>
          </div>
          <div className="menu-footer">
            <span className="sub-menu-item">
              {restaurant?.cards?.[0]?.card?.card?.info?.avgRatingString ===
              "NEW"
                ? "No Rating"
                : restaurant?.cards?.[0]?.card?.card?.info?.avgRatingString}
              <ThemeProvider theme={theme}>
                <StarIcon color="primary" className="star-size" />
              </ThemeProvider>
            </span>
            <span className="sub-menu-item">
              {restaurant?.cards?.[0]?.card?.card?.info?.sla?.deliveryTime} Mins
            </span>
            <span className="sub-menu-item">
              {"Cost for two ₹" +
                restaurant?.cards?.[0]?.card?.card?.info?.costForTwo / 100}
            </span>
          </div>
        </div>
      </div>
      <div className="menu">
        <span className="menu-span">Menu</span>
        <div className="menu-recommended-items">
          {Object.values(restaunrantItem?.cards).map((item, i) => (
            <Accordian {...item?.card?.card?.itemCards} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
