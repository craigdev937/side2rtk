import React from "react";
import classes from "./App.module.css";
import { Outlet } from "react-router";
import { Navbar } from "../routes/Navbar";

export const App = () => {
    return (
        <React.Fragment>
            <div className={classes.app}>
                <Navbar />
                <div className={classes.content}>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};


