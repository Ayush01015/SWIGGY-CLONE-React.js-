import { useState,useEffect } from "react";


export default  getCoordinates = () => {
    const [coords,setCoords] = useState({
        lat:0,
        long:0,
    });
    useEffect(() => {
      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        }
      };
      const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log("Latitude:-> " + latitude);
        // console.log("Longitude:-> " + longitude);
        setCoords({
            lat:latitude,
            long:longitude,
        })
      };
  
      getLocation();
      
    }, []);
    
    return coords;
}
