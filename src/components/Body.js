import Card from "../components/Card";
import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { SWIGGY_PUBLIC_API } from "../constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import Search from "./Search/Search";
import Locator from "./Locator/Locator";
import useInfiniteScroll from "../Utils/useInfiniteScroll";
import { v4 as uuidv4 } from "uuid";

const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //for searching input in seach input box
  const [filteredRestaurants, setfilteredRestaurants] = useState([]); // for searched data on search button
  const [allRestaurants, setAllRestaurants] = useState([]); // for rendering all data from API.
  const [latitude, setLatitude] = useState(28.620948093201154);
  const [longitude, setLongitude] = useState(77.05699993744116);
  const [loc, setLoc] = useState("Delhi");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const typingSpeed = 70; // Adjust the typing speed (in milliseconds)
  const fullText = `Feast on Exquisite Cuisine`; // The text you want to display with the typing effect

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (index < fullText.length) {
  //       setText((prevText) => prevText + fullText.charAt(index));
  //       setIndex((prevIndex) => prevIndex + 1);
  //     }
  //   }, typingSpeed);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [fullText]);
  // if(filteredRestaurants.length > 100) return <>FUCKED</>;
  const { loading, error, hasMore, moreRestaurants } = useInfiniteScroll(
    query,
    pageNumber
  );

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  async function getRestaurants() {
    const data = await fetch(
      `${SWIGGY_PUBLIC_API}lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();

    let resData =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("Body Json: ", json);
    console.log("Body Cards", resData);
    setAllRestaurants(resData);
    setfilteredRestaurants(resData);
  }

  useEffect(() => {
    getRestaurants();
  }, [latitude, longitude]);

  useEffect(() => {
    const updateRestaurants = () => {
      if (moreRestaurants.length > 0) {
        setAllRestaurants((prevAllRestaurants) => [
          ...prevAllRestaurants,
          ...moreRestaurants,
        ]);
        setfilteredRestaurants((prevFilteredRestaurants) => [
          ...prevFilteredRestaurants,
          ...moreRestaurants,
        ]);
      }
    };
    updateRestaurants();
  }, [moreRestaurants]);

  const isOnline = useOnline();
  console.log("allRES", allRestaurants);
  console.log("filteredRes", filteredRestaurants);
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
          height: "100%",
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
    );

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
        {/* <h1 className="typing-effect">{text}</h1> */}
      </div>
      {console.log("More len: ", moreRestaurants.length)}
      {console.log("filter len: ", filteredRestaurants.length)}
      {console.log("all len: ", allRestaurants.length)}
      <div className="body">
        {allRestaurants.length === 0 ? (
          <ShimmerUI count={12} />
        ) : filteredRestaurants.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          <>
            <div  className="body-component">
              {filteredRestaurants.map((restaurant, idx) => {
                const currentIndex = idx + 1;
                const isLastElement =
                  currentIndex === filteredRestaurants.length;

                if (isLastElement) {
                  return (
                    <div ref={lastElementRef} key={uuidv4()}>
                      <Link to={"restaurants/" + restaurant?.info?.id}>
                        <Card {...restaurant.info} key={index} />
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div key={uuidv4()}>
                      <Link to={"restaurants/" + restaurant?.info?.id}>
                        <Card {...restaurant.info} />
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <ShimmerUI count={3} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Body;

