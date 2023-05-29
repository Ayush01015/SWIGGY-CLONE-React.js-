import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const API_END_POINT = `https://api.openweathermap.org/data/2.5/onecall?`;
const API_KEY = `b4d82e597d9b74b91cb091d0a8c07795`;

const locations = [
{
    label: "Mumbai",
    coordiantes:{
        latitude: "19.093857566851742",
        longitude: "72.88116849297687",
    }
},
{
    label: "Delhi",
    coordiantes:{
        latitude: "28.696701100186587",
        longitude: "77.22774819099834",
    }
},
{
    label: "Chennai",
    coordiantes:{
    latitude: "13.062857965520527",
    longitude: "80.17054137064898",
    }
},
{
    label: "Gujrat",
    coordiantes:{
    latitude: "23.12851035374904",
    longitude: "70.7938991819456",
    }
},
{
    label: "Firozabad",
    coordiantes:{
    latitude: "27.166821899820434",
    longitude: "78.39047234580343",
    }
},
{
    label: "Agra",
    coordiantes:{
    latitude: "27.179510017864065",
    longitude: "77.99030849867361",
    }
},
{
    label: "Pune",
    coordiantes:{
    latitude: "18.51808778995817",
    longitude: "73.8670828594802",
    }
},
];

const Locator = ({latitude,longitude,setLatitude,setLongitude}) => {


  const [selectedLocation, setSelectedLocation] = useState(null);

  console.log("-->",latitude,"-->",longitude);

  async function getRestaurantsByLocation(){
    const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`)
    const json = await data.json();
    console.log("updated Json: ", json);
  }
  
  useEffect(()=>{
    getRestaurantsByLocation();
  },[latitude,longitude])

  const handleLocationChange = (event, value) => {
    if(value!==null)
    {const {latitude,longitude} = value.coordiantes;
    setSelectedLocation(value);
    setLatitude(latitude);
    setLongitude(longitude);}
  };

  {
    console.log("latitude",latitude)
    console.log("logitude",longitude)
  }


  
  return (
    <div className="locator">   
        <Autocomplete
        options={locations}
        getOptionLabel={(option) => option.label}
        value={selectedLocation}
        onChange={handleLocationChange}
        sx={{width:280}}
        renderInput={(params) => <TextField {...params} label="Select a location" variant="outlined" />}
        />
    </div>
  );

};

export default Locator;
