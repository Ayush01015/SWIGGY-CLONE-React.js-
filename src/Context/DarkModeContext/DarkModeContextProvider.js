import { useState } from "react";
import DarkModeContext from "./DarkModeContext";

const DarkModeContextProvider = ({children}) =>{
    const [darkMode,setDarkMode] = useState({
        headerBackgroundColorDark:"#11161A",
        headerBackgroundColorLight:`rgba(255, 255, 255, 0.5)`,
        headerBackdropFilter:`blur(10px)`,
        headerColorLight:"black",
        headerColorDark:"white",
        bodyBackgroundColorDark:"#141A1F",
        bodyBackgroundColorLight:"white",
        bodyColorDark:"black",
    }); 
    const [darkModeEnable,setDarkModeEnable] = useState(false);
    return(
        <DarkModeContext.Provider value={{
            darkMode,setDarkMode,darkModeEnable,setDarkModeEnable
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContextProvider;