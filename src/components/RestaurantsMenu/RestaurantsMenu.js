import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import ShimmerMenu from "../ShimmerMenu";
import useRestaurants from "../../Utils/useRestaurant";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yellow, amber } from "@mui/material/colors";
import "./RestaurantsMenu.css";
import { addItem } from "../../Utils/Slices/CartSlice";
import { useDispatch } from "react-redux";
import Accordian from "../Accordian/Accordian";
import Skeleton from "@mui/material/Skeleton";

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
    restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR;
  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(addItem("Grapes"));
  };
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

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
        <>
          {restaunrantItem !== undefined ? (
            <div className="menu-recommended-items">
              {Object.values(restaunrantItem?.cards)
                .slice(1)
                .map((item, i) => (
                  <>
                  {/* {console.log(i+1,...item?.card?.card?.itemCard)} */}
                  <Accordian {...item?.card?.card?.itemCards} key={i} />
                  </>
                ))}
            </div>
          ) : (
            <div className="menu-sub">
              {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                ?.cards[2]?.card?.card?.itemCards ||
              restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                ?.card?.card?.itemCards ? (
                (restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[2]?.card?.card?.itemCards ||
                  restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[2]?.card?.card?.itemCards) &&
                Object.values(
                  restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[2]?.card?.card?.itemCards ||
                    restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
                      ?.cards[2]?.card?.card?.itemCards
                ).map((item,i) => (
                  <>
                    <div className="menu-section-container" key={i}>
                      <div className="menu-section">
                        <div className="menu-section-info">
                          <p>{item?.card?.info?.name}</p>
                          {console.log("->",item?.card?.info)}
                          <p>
                            ₹
                            {!isNaN(item?.card?.info?.price)
                              ? item?.card?.info?.price / 100
                              : (100 + Math.random() * 350).toFixed(2)}
                          </p>
                          <p>
                            ⭐
                            {item?.card?.info?.ratings?.aggregatedRating
                              ?.rating === undefined
                              ? (1 + Math.random() * 4).toFixed(1)
                              : item?.card?.info?.ratings?.aggregatedRating
                                  ?.rating}
                          </p>
                        </div>
                        <div className="menu-section-img">
                        {console.log("imgiD",IMG_CDN_URL + item?.card?.info?.imageId)}
                          {item?.card?.info?.imageId !==
                          undefined ? (
                            <img
                              src={IMG_CDN_URL + item?.card?.info?.imageId}
                              alt=""
                            />
                          ) : (
                            <Skeleton
                              variant="rounded"
                              height="17.5vh"
                              sx={{ borderRadius: "10px" }}
                            />
                          )}
                          <button
                            className="add-item-btn-2"
                            onClick={() => addFoodItem(item)}
                          >
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <h3 className="restraunt-not-found">
                  Apologies, the restaurant is closed for the day
                </h3>
              )}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default RestaurantsMenu;

// {item.card.info.category !== "" ? (
//   <div className="menu-categories">
//     <p className="menu-category-name">{item.card.info.category}</p>
//     <button className="menu-categories-btn">SHOW</button>
//   </div>
// ) : null}
// <div className="menu-section-container">
//     <>
//       <div className="menu-section">
//         <div className="menu-section-info">
//           <p>{item?.card?.info?.name}</p>
//           {console.log(item?.card?.info?.price / 100)}
//           <p>
//             ₹
//             {!isNaN(item?.card?.info?.price)
//               ? data[key]?.card?.info?.price / 100
//               : (100 + Math.random() * 350).toFixed(2)
//               }
//           </p>
//           <p>
//             ⭐
//             {item?.card?.info?.ratings?.aggregatedRating?.rating ===
//             undefined
//               ? (1 + Math.random() * 4).toFixed(1)
//               : item?.card?.info?.ratings?.aggregatedRating?.rating}
//           </p>
//           <p>{truncateText(data[key]?.card?.info?.description)}</p>
//         </div>

//         <div className="menu-section-img">
//           {IMG_CDN_URL + item?.card?.info?.imageId !== undefined ? (
//             <img
//               src={IMG_CDN_URL + item?.card?.info?.imageId}
//               alt=""
//             />
//           ) : (
//             <Skeleton
//               variant="rounded"
//               height="17.5vh"
//               sx={{ borderRadius: "10px" }}
//             />
//           )}
//           <button
//             className="add-item-btn-2"
//             // onClick={()=>addFoodItem("item")}
//           >
//             ADD
//           </button>
//         </div>
//       </div>
//     </>
// </div>

{
  /* <div className="menu-sub-2" key={item.card.info.id}>
<div className="menu-item-con">
  <div className="menu-item-con-data">
    <p className="menu-item">{item.card.info.name}</p>
    <p style={{ fontSize: "1rem" }}>
      {item.card.info.category}
    </p>
    <p>
      ₹
      {item.card.info.price === NaN
        ? "1110"
        : item.card.info.price / 100}
    </p>
  </div>
  <div className="menu-item-con-img">
    <img
      src={IMG_CDN_URL + item.card.info.imageId}
      alt=""
    />
    <button
      className="add-item-btn"
      onClick={() => addFoodItem(item)}
    >
      Add
    </button>
  </div>
</div>
</div> */
}
