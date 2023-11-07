import React, { useState } from "react";
import { IMG_CDN_URL } from "../../constants";
import Skeleton from "@mui/material/Skeleton";
import { addItem } from "../../Utils/Slices/CartSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";


import "./Accordian.css";
function truncateText(text) {
  if (text) {
    const words = text.split(" ");
    if (words.length <= 15) {
      return text;
    } else {
      const truncatedText = words.slice(0, 15).join(" ");
      return `${truncatedText} ...`;
    }
  }
  return ""; // Return an empty string if text is undefined
}


const addFoodItem = (item) => {
  dispatch(addItem(item));
};

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setVisibleSection,
  data,
  category,
  setCategory,
}) => {
  const [isVis, setIsVis] = useState(false);
  const handleShow = () => {
    setIsVis(!isVis);
  };
  return (
    <>
      {category !== "" ? (
        <div className="menu-categories">
          <p className="menu-category-name">{category}</p>
          {isVis === false ? (
            <button onClick={handleShow} className="menu-categories-btn">
              <ExpandMoreIcon />
            </button>
          ) : (
            <button onClick={handleShow} className="menu-categories-btn">
              <ExpandLessIcon />
            </button>
          )}
        </div>
      ) : null}
      {!isVis && (
        <div className="menu-section-container">
          {Object.keys(data).map((key, i) => (
            <div key={i}>
              {setCategory(data[key]?.card?.info?.category)}
              {/* {console.log(data[key]?.card?.info?.category)} */}
              <div className="menu-section">
                <div className="menu-section-info">
                  <p>{data[key]?.card?.info?.name}</p>
                  {/* {console.log(data[key]?.card?.info?.price / 100)} */}
                  <p>
                    ₹
                    {!isNaN(data[key]?.card?.info?.price)
                      ? data[key]?.card?.info?.price / 100
                      : (100 + Math.random() * 350).toFixed(2)}
                  </p>
                  <p>
                    ⭐
                    {data[key]?.card?.info?.ratings?.aggregatedRating
                      ?.rating === undefined
                      ? (1 + Math.random() * 4).toFixed(1)
                      : data[key]?.card?.info?.ratings?.aggregatedRating
                          ?.rating}
                  </p>
                  <p>{truncateText(data[key]?.card?.info?.description)}</p>
                </div>

                <div className="menu-section-img">
                  {data[key]?.card?.info?.imageId !== undefined ? (
                    <img
                      src={IMG_CDN_URL + data[key]?.card?.info?.imageId}
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
                    // onClick={()=>addFoodItem(item)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
const Accordian = (data) => {
  const [visibleSection, setVisibleSection] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <Section
        data={data}
        title={"Recommended"}
        description={"Recommended items"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection("about");
        }}
        setVisibleSection={setVisibleSection}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
};

export default Accordian;

/**
 * lifting the state up
 *    taking power(control of state) from child(Section) to parent(Accordian)
 *
 * 
 * 
 * 
 * 
 * 
 *     <div className="">
      <h3 className="">{title}</h3>
      {!isVisible && (
        <button
          className=""
          onClick={() => setIsVisible()}
        >
          Show
        </button>
      )}
      {isVisible && (
        <button
          className=""
          onClick={() =>
            setVisibleSection("")
          }
        >
          Hide
        </button>
      )}
      {isVisible && <p>{description}</p>}
 */
//   {console.log("acc", i + 1, key, data[key].card.info.name)}
//   {console.log(
//     "acc",
//     data[key]?.card?.info?.ratings?.aggregatedRating?.rating
//   )}
