import { useState,useEffect } from "react";
import { SWIGGY_MENU_API_2 } from "../constants"

const useRestaurants = (id) => {
    console.log("id",id);
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(() => {
      getRestaurantsMenu();
    },[]);
    // https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D28.4792355%26lng%3D77.5142916%26restaurantId%3D507914%26catalog_qa%3Dundefined%26submitAction%3DENTER
    async function getRestaurantsMenu() {
      const data = await fetch(`${SWIGGY_MENU_API_2}lat=28.4792355&lng=77.5142916&restaurantId=28798&catalog_qa=undefined&submitAction=ENTER`);
      // console.log("--------->",SWIGGY_MENU_API_2+"lat%3D28.4792355%26lng%3D77.5142916%26restaurantId%3D"+id+"%26catalog_qa%3Dundefined%26submitAction%3DENTER");
      const json = await data.json();
      setRestaurant(json.data);
      console.log("JSON",json.data);
      
    }

    return restaurant;
}

export default useRestaurants;