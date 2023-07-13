import {IMG_CDN_URL} from "../constants"
import StarIcon from '@mui/icons-material/Star';
const Card = ({ name,costForTwoString, cloudinaryImageId ,address, totalRatingsString, deliveryTime, area, cuisines, avgRating }) => {
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
            <span id="cuisines">{cuisines?.join(", ")}</span>
            <p>{area}</p>
            <div className="card-footer">
              <div className="card-rating">{avgRating==="--"?"1.0":avgRating}<StarIcon fontSize="small"/></div>
              <span>{deliveryTime} MINS</span>
              <span>{costForTwoString}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Card;
  