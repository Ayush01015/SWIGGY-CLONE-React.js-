import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from '@mui/material/Paper';
// import Listbox from '@mui/material/Listbox';

const API_END_POINT = `https://api.openweathermap.org/data/2.5/onecall?`;
const API_KEY = `b4d82e597d9b74b91cb091d0a8c07795`;

const locations = [
  {
    label: "Firozabad (Default)",
    coordiantes: {
      latitude: "27.166821899820434",
      longitude: "78.39047234580343",
    },
  },
  {
    label: "Mumbai",
    coordiantes: {
      latitude: "19.053883935986374",
      longitude: "72.82328435649667",
    },
  },
  {
    label: "Delhi",
    coordiantes: {
      latitude: "28.696701100186587",
      longitude: "77.22774819099834",
    },
  },
  {
    label: "Chennai",
    coordiantes: {
      latitude: "13.062857965520527",
      longitude: "80.17054137064898",
    },
  },
  {
    label: "Gujrat",
    coordiantes: {
      latitude: "22.302506799084554",
      longitude: "70.79744525376664",
    },
  },
  {
    label: "Agra",
    coordiantes: {
      latitude: "27.179510017864065",
      longitude: "77.99030849867361",
    },
  },
  {
    label: "Pune",
    coordiantes: {
      latitude: "18.51808778995817",
      longitude: "73.8670828594802",
    },
  },
  {
    label: "Lucknow",
    coordiantes: {
      latitude: "26.895328986742207",
      longitude: "80.95687768039994",
    },
  },
  {
    label: "Prayagraj",
    coordiantes: {
      latitude: "25.49509801840442",
      longitude: "81.85923314782474",
    },
  },
  {
    label: "Goa",
    coordiantes: {
      latitude: "15.297654742740878",
      longitude: "74.10302124578317",
    },
  },
  {
    label: "Hyderabad",
    coordiantes: {
      latitude: "17.3885890377193",
      longitude: "78.47747030947507",
    },
  },
];

const Locator = ({ latitude, longitude, setLatitude, setLongitude }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // console.log("-->",latitude,"-->",longitude);

  // async function getRestaurantsByLocation(){
  //   const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`)
  //   const json = await data.json();

  // }

  // useEffect(()=>{
  //   getRestaurantsByLocation();
  // },[latitude,longitude])

  const handleLocationChange = (event, value) => {
    if (value !== null) {
      const { latitude, longitude } = value.coordiantes;
      setSelectedLocation(value);
      setLatitude(latitude);
      setLongitude(longitude);
    }
  };

  return (
      <Autocomplete
        className="location-selector"
        options={locations}
        getOptionLabel={(option) => option.label}
        value={selectedLocation}
        onChange={handleLocationChange}
        // sx={{width:280, border:"none"}}
        renderInput={(params) => (
          <TextField {...params} label="Select Location" variant="outlined" />
        )}
        PaperComponent={({ children }) => (
          <Paper style={{ width: 200, fontFamily:"Montserrat", color:"black", fontWeight:600 }}>{children}</Paper>
        )}
      />
  );
};

export default Locator;
