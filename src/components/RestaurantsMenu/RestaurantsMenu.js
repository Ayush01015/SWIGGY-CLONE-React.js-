import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import ShimmerMenu from "../ShimmerMenu";
import useRestaurants from "../../Utils/useRestaurant";
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow,amber } from '@mui/material/colors';
import "./RestaurantsMenu.css";

const theme = createTheme({
    palette: {
      primary: yellow,
      secondary: amber,
    },
});

const RestaurantsMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurants(id);
  return !restaurant ? (
    <ShimmerMenu /> 
  ) : (
    <div className="restraunt-menu">
      <div className="menu-header"
      >
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
            <div  className="header-info">
            <div className="menu-head-content"> 
                <p className="res-menu-itm res-name">
                  {restaurant?.cards?.[0]?.card?.card?.info?.name}
                </p>
                <p className="res-menu-itm">
                  {restaurant?.cards?.[0]?.card?.card?.info?.cuisines?.join(", ")}
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
              {
                restaurant?.cards?.[0]?.card?.card?.info?.avgRatingString === "NEW"
                ? "No Rating"
                : restaurant?.cards?.[0]?.card?.card?.info?.avgRatingString 
              }
              <ThemeProvider theme={theme}>
                <StarIcon color="primary" className="star-size"/>
              </ThemeProvider>
            </span>
            <span className="sub-menu-item">
              {restaurant?.cards?.[0]?.card?.card?.info?.sla?.deliveryTime} Mins
            </span>
            <span className="sub-menu-item">
              {"Cost for two ₹"+restaurant?.cards?.[0]?.card?.card?.info?.costForTwo / 100}
            </span>
        </div>
      </div>
      <div className="menu">
        <span className="menu-span">Menu</span>
        {/* {console.log("menu",restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)} */}
        <div className="menu-sub"
        >
              
          {
            (restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards) 
            ?
            (restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards) &&
            Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
            ).map((item) => (
              <div className="menu-sub-2" key={item.card.info.id}
              >
                <div className="menu-item-con">
                  <div className="menu-item-con-data">
                    <p
                      className="menu-item">
                      {item.card.info.name}
                    </p>
                    <p style={{ fontSize: "1rem" }}>{item.card.info.category}</p>
                    <p>₹{"Nan"?"1110":(item.card.info.price / 100)}</p>
                  </div>
                  <div className="menu-item-con-img">
                    <img src={IMG_CDN_URL + item.card.info.imageId} alt=""  />
                  </div>
                </div>
              </div>
            ))
            :
            <h3 className="restraunt-not-found">
              Apologies, the restaurant is closed for the day
            </h3>
            }
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
