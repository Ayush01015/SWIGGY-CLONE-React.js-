import Card from "../components/Card";
import { useState, useEffect, useContext } from "react";
import { SWIGGY_PUBLIC_API } from "../constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import Search from "./Search/Search";
import Locator from "./Locator/Locator";
import DarkModeContext from "../Context/DarkModeContext/DarkModeContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //for searching input in seach input box
  const [filteredRestaurants, setfilteredRestaurants] = useState([]); // for searched data on search button
  const [allRestaurants, setAllRestaurants] = useState([]); // for rendering all data from API.
  const [latitude, setLatitude] = useState(28.620948093201154);
  const [longitude, setLongitude] = useState(77.05699993744116);
  const [loc, setLoc] = useState("Delhi");
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
    let resData;
    console.log("Json: ", json);
    if (
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants === undefined
    ) {
      setAllRestaurants(
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); //Setting data in restaurants
      setfilteredRestaurants(
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); //Setting data in filtered restaurants for search.
    } else {
      setAllRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); //Setting data in restaurants
      setfilteredRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  }

  useEffect(() => {
    getRestaurants();
  }, [latitude, longitude]);



  const isOnline = useOnline();

  if (!isOnline) return <h1>Check Your Internet Connection</h1>;

  if (!allRestaurants)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10rem",
          marginBottom: "10rem",
          height:"100%",
        }}
        className="no-restaurant"
      >
        <h1>No Restaurants Founds Please Try Again, Later</h1>
        <p>Try changing your location</p>
        <Locator
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
          setLoc={setLoc}
        />
      </div>
    ); //early return

  // if(filteredRestaurants.length === 0) return <h1>Not Found</h1>
  return (
    <div>
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
          setLoc={setLoc}
        />
      </div>
      <div className="catch-phrase text-gradient tx-center">
        <h1 className="res-location">Restaurants in {loc}</h1>
        <h1 className="typing-effect">{text}</h1>
      </div>
      {/* <Banner /> */}
      <div className="body">
        {allRestaurants.length === 0 ? (
          <ShimmerUI />
        ) : filteredRestaurants.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <Card {...restaurant.info} />
                {/* {console.log("DATA: ",restaurant.info.id)} */}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
