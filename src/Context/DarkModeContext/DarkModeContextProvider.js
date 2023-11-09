import { useState } from "react";
import DarkModeContext from "./DarkModeContext";

const DarkModeContextProvider = ({children}) =>{
    const [darkMode,setDarkMode] = useState(false);
    return(
        <DarkModeContext.Provider value={{
            darkMode,setDarkMode
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContextProvider;