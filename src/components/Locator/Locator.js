import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import DarkModeContext from "../../Context/DarkModeContext/DarkModeContext";
import { CSSTransition } from 'react-transition-group';
import "./Locator.css";

const locations = [
  {
    label: "Delhi",
    coordinates: {
      latitude: "28.696701100186587",
      longitude: "77.22774819099834",
    },
  },
  {
    label: "Mumbai ",
    coordinates: {
      latitude: "19.053883935986374",
      longitude: "72.82328435649667",
    },
  },
  {
    label: "Chennai",
    coordinates: {
      latitude: "13.062857965520527",
      longitude: "80.17054137064898",
    },
  },
  {
    label: "Gujrat",
    coordinates: {
      latitude: "22.302506799084554",
      longitude: "70.79744525376664",
    },
  },
  {
    label: "Agra",
    coordinates: {
      latitude: "27.179510017864065",
      longitude: "77.99030849867361",
    },
  },
  {
    label: "Pune",
    coordinates: {
      latitude: "18.51808778995817",
      longitude: "73.8670828594802",
    },
  },
  {
    label: "Lucknow",
    coordinates: {
      latitude: "26.895328986742207",
      longitude: "80.95687768039994",
    },
  },
  {
    label: "Prayagraj",
    coordinates: {
      latitude: "25.49509801840442",
      longitude: "81.85923314782474",
    },
  },
  {
    label: "Hyderabad",
    coordinates: {
      latitude: "17.3885890377193",
      longitude: "78.47747030947507",
    },
  },
];
console.log(locations);
const Locator = ({
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  setLoc,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { darkModeEnable } = useContext(DarkModeContext);

  const handleLocationChange = (value) => {
    console.log("value",value)
    if (value !== null) {
      const { latitude, longitude } = value.coordinates;
      setSelectedLocation(value);
      setLatitude(latitude);
      setLongitude(longitude);
      setLoc(value.label);

    }
  };
  
  console.log("-->",latitude,"-->",longitude);
  return (
      <Autocomplete
        className="location-selector"
        style={
          darkModeEnable
            ? {
                backgroundColor: "white",
              }
            : {
                backgroundColor: "transparent",
              }
            
        }
        options={locations}
        getOptionLabel={(option) => option.label}
        value={selectedLocation}
        onChange={(event, value) => handleLocationChange(value)}
        // sx={{width:280, border:"none"}}
        renderInput={(params) => (
          <TextField {...params} label="Select Location" variant="outlined" />
        )}
        PaperComponent={({ children }) => (
          <Paper
            style={{
              width: 200,
              fontFamily: "Montserrat",
              color: "black",
              fontWeight: 600,
            }}
          >
            {children}
          </Paper>
        )}
      />
  );
};

export default Locator;

