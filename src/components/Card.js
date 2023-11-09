import {IMG_CDN_URL} from "../constants"
import StarIcon from '@mui/icons-material/Star'; 
const Card = ({ name,costForTwo, cloudinaryImageId ,address, totalRatingsString, sla, areaName, cuisines, avgRatingString }) => {
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
            <span>
              {name}
            </span>
            <p>{areaName}</p>
            <p id="cuisines">{cuisines?.join(", ")}</p>
            <div className="card-footer">
              <div className="card-rating">{avgRatingString==="NEW"?"1.0":avgRatingString}<StarIcon fontSize="small"/></div>
              <span>{sla.deliveryTime} MINS</span>
              <span>{costForTwo}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Card;
  