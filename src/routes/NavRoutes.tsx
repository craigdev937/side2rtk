import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { App } from "../app/App";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Help } from "../pages/Help";
import { Library } from "../pages/Library";
import { Calendar } from "../pages/Calendar";
import { Analytics } from "../pages/Analytics";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/analytics",
                element: <Analytics />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/calendar",
                element: <Calendar />
            },
            {
                path: "/library",
                element: <Library />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};




