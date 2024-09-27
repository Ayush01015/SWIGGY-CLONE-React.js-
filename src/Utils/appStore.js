import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice"

const appStore = configureStore({
    /*
        whole big reducer for our whole app which contain all small reducers 
    */
    reducer:{
        cart:cartReducer,
    },
});

export default appStore;