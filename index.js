import React from "react";
import { createRoot } from 'react-dom/client';

import Header from "./src/components/Header";
import Body from "./src/components/Body";

import {createBrowserRouter , RouterProvider, Outlet} from "react-router";
import {About} from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>       
    );
};

const appRouter = createBrowserRouter([
  {
    // path:"",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element:<Body/>
      },

      {
        path:"/About",
        element: <About/>
      },
      {
        path:"/Contact",
        element: <Contact/>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>,
  },
  

  

]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);