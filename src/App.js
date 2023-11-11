import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer/Footer.js";
import AboutUs from "./components/AboutUs/AboutUs";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact/Contact.js";
// import Instamart from "./components/Instamart";
import Cart from "./components/Cart/Cart.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Deals from "./components/Deals";
import RestaurantsMenu from "./components/RestaurantsMenu/RestaurantsMenu";
import ShimmerCard from "./components/ShimmerCard";
import { Provider } from "react-redux";
import store from "./Utils/store.js";
import DarkModeContextProvider from "../src/Context/DarkModeContext/DarkModeContextProvider.js";
import DarkModeContext from "./Context/DarkModeContext/DarkModeContext.js";
import CartContextProvider from "./Context/CartContext/CartContextProvider.js";
/*
Chunking
code splitting
dynamic bundling
lazy loading
on demand loading
dynamic import
(synonyms)
*/
const Instamart = lazy(() => import("./components/Cart/Cart.js")); //it's a promise(js)

const SwiGker = () => {
  return (
    <CartContextProvider>
      <DarkModeContextProvider>
        <Header />
        {/* {every Children Will come at the place of Outlet when the Link is clicked} */}
        <Outlet />
        <Footer />
      </DarkModeContextProvider>
    </CartContextProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SwiGker />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/deals",
        element: <Deals />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
