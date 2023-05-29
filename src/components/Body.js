import Card from "../components/Card";
import { useState, useEffect } from "react";

import { SWIGGY_PUBLIC_API } from "../constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Utils";
import useOnline from "../Utils/useOnline";
import Search from "./Search";
import Locator from "./Locator";
import getCoordinates  from "../Utils/getCoordinates";


const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //for searching input in seach input box
  const [filteredRestaurants, setfilteredRestaurants] = useState([]); // for searched data on search button
  const [allRestaurants, setAllRestaurants] = useState([]); // for rendering all data from API.
  const [latitude, setLatitude] = useState(27.166821899820434);
  const [longitude, setLongitude] = useState(78.39047234580343);



  async function getRestaurants() {
    //fetching data fromm API
    const data = await fetch(
      `${SWIGGY_PUBLIC_API}lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    // console.log("Json: ", json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); //Setting data in restaurants
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); //Setting data in filtered restaurants for search.
  }


  useEffect(() => {
    getRestaurants();
  }, [latitude,longitude]);
  
    // use this function to get your location coordinates and set the default value of latitude and longitude 
    // for now i am using static data
    // const coords = getCoordinates();
    // console.log("coords-->",coords.lat,coords.long);
    


  const isOnline = useOnline();
  if (!isOnline) return <h1>Check your Internet Connection...</h1>;

  if (!allRestaurants) return <h1>No Restaurants Founds</h1>; //early return

  // if(filteredRestaurants.length === 0) return <h1>Not Found</h1>
  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="body-header">
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setfilteredRestaurants={setfilteredRestaurants}
          allRestaurants={allRestaurants}
        />
          <Locator
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
      </div>
      <div className="body">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurants/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <Card {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
