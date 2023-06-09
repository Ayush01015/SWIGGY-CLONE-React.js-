import Card from "../components/Card";
import { useState, useEffect } from "react";
import { SWIGGY_PUBLIC_API } from "../constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Utils";
import useOnline from "../Utils/useOnline";
import Search from "./Search/Search";
import Locator from "./Locator/Locator";
import Banner from "./Banner/Banner";

const Body = () => {

  const [searchInput, setSearchInput] = useState(""); //for searching input in seach input box
  const [filteredRestaurants, setfilteredRestaurants] = useState([]); // for searched data on search button
  const [allRestaurants, setAllRestaurants] = useState([]); // for rendering all data from API.
  const [latitude, setLatitude] = useState(28.696701100186587);
  const [longitude, setLongitude] = useState(77.22774819099834);
  const [loc,setLoc] = useState("Delhi");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 70; // Adjust the typing speed (in milliseconds)
  const fullText = `Feast on Exquisite Cuisine`; // The text you want to display with the typing effect

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, typingSpeed);

    return () => {
      clearTimeout(timer);
    };
  }, [index, fullText]);

  async function getRestaurants() {
    //fetching data fromm API
    const data = await fetch(
      `${SWIGGY_PUBLIC_API}lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log("Json: ", json);
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
  if (!isOnline) return <h1>Check Your Internet Connection</h1>;

  if (!allRestaurants) return <h1>No Restaurants Founds</h1>; //early return

  // if(filteredRestaurants.length === 0) return <h1>Not Found</h1>
  return (
    <div>
      <div className="body-header"
      >
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
          setLoc={setLoc}
        />
      </div>
      <Banner/>
      
      <div className="catch-phrase text-gradient tx-center">
        <h1 className="res-location">Restaurants in {loc}</h1>
        <h1 className="typing-effect">{text}</h1>
      </div>
      <div className="body">
      {
        allRestaurants.length === 0 
        ? <ShimmerUI/>
        :
        filteredRestaurants.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurants/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <Card {...restaurant.data} />
                {/* {console.log("DATA: ",restaurant.data)} */}
              </Link>
            );
          })
        )
      }
      </div>
    </div>
  );
};

export default Body;
