import React from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "../constants";
import { IMG_CDN_URL } from "../constants";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurants from "../Utils/useRestaurant";

const RestaurantsMenu = () => {
  const { id } = useParams();
  console.log("0-id", id);
  const restaurant = useRestaurants(id);
  // separate Custom Hook for fetching and rendering the data.
  {
    console.log("restaurant-->", restaurant);
  }
  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className="restraunt-menu">
      <div className="menu-header">
        <div className="menu-header-img menu-header-mg">
          <img
            src={
              IMG_CDN_URL +
              restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
            alt="resImg"
          />
        </div>
        <div className="header-info">
        <div className="menu-head-content"> 
            <p className="res-menu-itm res-name">
              {restaurant?.cards[0]?.card?.card?.info?.name}
            </p>
            <p className="res-menu-itm">
              {restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}
            </p>
            <p className="res-menu-itm">
              {restaurant?.cards[0]?.card?.card?.info?.areaName}
            </p>
            <p className="res-menu-itm">
              {restaurant?.cards[0]?.card?.card?.info?.city}
            </p>
        </div>
          <div
          className="menu-footer">
            <span className="sub-menu-item">
              {restaurant?.cards[0]?.card?.card?.info?.avgRatingString === "NEW"
                ? "No Rating"
                : restaurant?.cards[0]?.card?.card?.info?.avgRatingString +
                  " Stars"}
            </span>
            <span className="sub-menu-item">
              {restaurant?.cards[0]?.card?.card?.info?.sla?.deliveryTime} Mins
            </span>
            <span className="sub-menu-item">
              {restaurant?.cards[0]?.card?.card?.info?.costForTwo / 100}
            </span>
          </div>
        </div>
      </div>
      <div className="menu">
        <span className="menu-span">Menu</span>
        {/* {console.log("menu",restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)} */}
        <div className="menu-sub">
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards &&
            Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
            ).map((item) => (
              <div className="menu-sub-2" key={item.card.info.id}>
                {/* {console.log("items", item.card.info)} */}
                <div className="menu-item-con">
                  <div className="menu-item-con-data">
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.card.info.name}
                    </p>
                    <p style={{ fontSize: "1rem" }}>{item.category}</p>
                    <p>₹{item.card.info.price / 100}</p>
                  </div>
                  <div className="menu-item-con-img">
                    <img src={IMG_CDN_URL + item.card.info.imageId} alt="img" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
