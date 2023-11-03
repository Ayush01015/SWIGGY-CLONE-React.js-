import React, { useState } from "react";
import { IMG_CDN_URL } from "../../constants";
import Skeleton from "@mui/material/Skeleton";
import "./Accordian.css";
const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setVisibleSection,
  data,
}) => {
  return (
    <div className="menu-section-container">
      {Object.keys(data).map((key, i) => (
        <>
          {/* {console.log("acc", i + 1, key, data[key].card.info.name)}
          {console.log(
            "acc",
            data[key]?.card?.info?.ratings?.aggregatedRating?.rating
          )} */}
          <div className="menu-section">
            <div className="menu-section-info">
              <p>{data[key]?.card?.info?.name}</p>
              <p>₹{data[key]?.card?.info?.price / 100}</p>
              <p>
                ⭐
                {data[key]?.card?.info?.ratings?.aggregatedRating?.rating ===
                undefined
                  ? (1 + Math.random() * 4).toFixed(1)
                  : data[key]?.card?.info?.ratings?.aggregatedRating?.rating}
              </p>
              <p>
                {"8 allo paratha combo achar chatni raita Punjab The Rasoi"}
              </p>
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
                    sx={{borderRadius:"10px"}}
                />
              )}
              <button
                className="add-item-btn-2"
                // onClick={()=>addFoodItem("item")}
              >
                ADD
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
const Accordian = (data) => {
  {
    // console.log("Accordian Data", data);
  }
  const [visibleSection, setVisibleSection] = useState("");
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
