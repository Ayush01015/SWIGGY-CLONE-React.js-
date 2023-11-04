import { useState,useEffect } from "react";
import { SWIGGY_MENU_API_2 } from "../constants"

const useRestaurants = (id) => {
    console.log("id",id);
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(() => {
      getRestaurantsMenu();
    },[]);

    async function getRestaurantsMenu() {
      const data = await fetch(SWIGGY_MENU_API_2+id);
      console.log("--------->",SWIGGY_MENU_API_2+id+"&submitAction=ENTER");
      const json = await data.json();
      setRestaurant(json.data);
      console.log("JSON",json.data);
      
    }

    return restaurant;
}

export default useRestaurants;