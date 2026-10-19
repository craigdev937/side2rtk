import React from "react";
import classes from "./App.module.css";
import { Outlet } from "react-router";
import { Navbar } from "../routes/Navbar";

export const App = () => {
    return (
        <React.Fragment>
            <section className={classes.app}>
                <Navbar />
                <main className={classes.content}>
                    <Outlet />
                </main>
            </section>
        </React.Fragment>
    );
};


