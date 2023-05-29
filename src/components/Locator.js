import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { SWIGGY_PUBLIC_API } from "../constants";
import { json } from "react-router-dom";

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


const Locator = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);



  
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
