import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { App } from "../app/App";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Help } from "../pages/Help";
import { Library } from "../pages/Library";

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
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/help",
                element: <Help />
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
        <RouterProvider router={RouteList} />
    );
};




