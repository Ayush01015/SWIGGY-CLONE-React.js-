import { useEffect, useState } from "react";
import axios from "axios";

const useInfiniteScroll = (query, pageNumber,latitude,longitude) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [offset, setOffset] = useState(15); 
  const [moreRestaurants, setMoreRestaurants] = useState([]);
  const fetchData = async () => {
    console.log("SCROLL FILE ::: lat,long",latitude,longitude)
    
    setLoading(true);
    const url =
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/update";
    const postData = {
      lat: latitude,
      lng: longitude,
      nextOffset: "COVCELQ4KICAsOGuzIC2ODCnEzgE",
      widgetOffset: {
        NewListingView_Topical_Fullbleed: "",
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: `${offset}`,
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
    };

    try {
      const response = await axios.post(url, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok.");
      }

      setMoreRestaurants([])
      const newData =
        response?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setMoreRestaurants((prevData) => [...prevData, ...newData]);
      setHasMore(newData?.length > 0);

      setOffset((prevOffset) => prevOffset + 1);

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);
  if(moreRestaurants.length === 500)
    setHasMore(false);
  return { moreRestaurants, loading, hasMore, error };
};

export default useInfiniteScroll;
