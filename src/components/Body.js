import Card from "../components/Card";
import { useState, useEffect } from "react";
// import { restaurantsList } from "../constants";
import { SWIGGY_PUBLIC_API } from "../constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Utils";
import useOnline from "../Utils/useOnline";
import Search from "./Search";

const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //for searching input in seach input box
  const [filteredRestaurants, setfilteredRestaurants] = useState([]); // for searched data on search button
  const [allRestaurants, setAllRestaurants] = useState([]); // for rendering all data from API. 


  async function getRestaurants() { //fetching data fromm API
    const data = await fetch(SWIGGY_PUBLIC_API);
    const json = await data.json();
    // console.log("Json: ", json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); //Setting data in restaurants
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); //Setting data in filtered restaurants for search.
  }


  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useOnline();
  if(!isOnline)
      return <h1>Check your Internet Connection...</h1>


  if(!allRestaurants) return <h1>Please Reload Something Went Wrong</h1>; //early return

  // if(filteredRestaurants.length === 0) return <h1>Not Found</h1>
  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} setfilteredRestaurants={setfilteredRestaurants} allRestaurants={allRestaurants}  />
      <div className="body">
        {filteredRestaurants.map((restaurant) => {
          return(
          <Link to={"restaurants/"+ restaurant?.data?.id } key={restaurant?.data?.id}>
          <Card {...restaurant.data} />
          </Link>
          )
        })}
      </div>
    </>
  );
};

export default Body;
