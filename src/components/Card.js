import {IMG_CDN_URL} from "../constants"

const Card = ({ name, cloudinaryImageId ,address, totalRatingsString, deliveryTime, area, cuisines }) => {
    return (
      <div className="card-component">
        <div className="card">
          <img
            src={
              IMG_CDN_URL + cloudinaryImageId
            }
            alt="img"
          />
          <div className="card-items">
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                color: "gray",
              }}
            >
              {name}
            </span>
            {/* <p>{address}</p> */}
            <span id="cuisines">{cuisines.join(", ")}</span>
            <p>{area}</p>
            <div className="card-rating">
              <h5>{totalRatingsString}</h5>
              <h5>{deliveryTime} MINS</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Card;
  