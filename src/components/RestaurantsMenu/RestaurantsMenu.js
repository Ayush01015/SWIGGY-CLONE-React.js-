import React, { useState, useEffect } from "react";
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

  // console.log("restaurant", restaurant);

  const restaurantItem =
    restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR ||
    restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR ||
    restaurant?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR;

  const headerData =
    restaurant?.cards?.[0]?.card?.card?.info ||
    restaurant?.cards?.[2]?.card?.card?.info ||
    restaurant?.cards?.[5]?.card?.card?.info;

  console.log("RestaurantsMenu JSON", restaurantItem?.cards);
  console.log("RestaurantsMenu JSON", Array.isArray(restaurantItem));

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className="restraunt-menu">
      <div className="menu-container">
        <div className="menu-header">
          <div className="menu-head">
            <div className="menu-header-img">
              <img
                src={IMG_CDN_URL + headerData?.cloudinaryImageId}
                alt="resImg"
              />
            </div>
            <div className="header-info">
              <div className="menu-head-content">
                <p className="res-menu-itm res-name">{headerData?.name}</p>
                <p className="res-menu-itm">
                  {headerData?.cuisines?.join(", ")}
                </p>
                <p className="res-menu-itm">{headerData?.areaName}</p>
                <p className="res-menu-itm">{headerData?.city}</p>
              </div>
            </div>
          </div>
          <div className="menu-footer">
            <span className="sub-menu-item">
              {headerData?.avgRatingString === "NEW"
                ? "No Rating"
                : headerData?.avgRatingString}
              <ThemeProvider theme={theme}>
                <StarIcon color="primary" className="star-size" />
              </ThemeProvider>
            </span>
            <span className="sub-menu-item">
              {headerData?.sla?.deliveryTime + " "}
              Mins
            </span>
            <span className="sub-menu-item">
              {"Cost for two ₹ " + headerData?.costForTwo / 100}
            </span>
          </div>
        </div>
      </div>
      <div className="menu">
        <span className="menu-span">Menu</span>
        <div className="menu-recommended-items">
          {Object.values(restaurantItem?.cards).slice(1).map((item, i) => (
            <Accordian {...(item?.card?.card?.itemCards || item?.card?.card?.categories)} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
