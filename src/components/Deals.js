import { useEffect, useState, useRef, useCallback } from "react";
import Banner from "./Banner/Banner";
// import UseSearchBook from "../Utils/useSearchBook";
import axios from "axios";
import useInfiniteScroll from "../Utils/useInfiniteScroll";
import ShimmerUI from "./ShimmerUI";
import Card from "./Card";

const Deals = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, hasMore, moreRestaurants } = useInfiniteScroll(
    query,
    pageNumber
  );

  // console.log("loading, error, hasMore, data", loading, error, hasMore, data);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log("Page Number", pageNumber);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <Banner />
      {/* {console.log("len: ", moreRestaurants.length)} */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {moreRestaurants.map((restaurant, index) => {
          if (moreRestaurants.length === index + 1)
            return (
              <div ref={lastElementRef}>
                <Card {...restaurant.info} key={index} />
              </div>
            );
          else
            return (
              <div>
                <Card {...restaurant.info} key={index} />
              </div>
            );
        })}
      </div>
      <div>
        <ShimmerUI count={3}/>
      </div>
      <div>{error}</div>
    </>
  );
};

export default Deals;
