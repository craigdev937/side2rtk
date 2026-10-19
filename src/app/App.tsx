import React from "react";
import classes from "./App.module.css";
import { Outlet } from "react-router";
import { Navbar } from "../routes/Navbar";

export const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    );
};


