import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavRoutes } from "./routes/NavRoutes";

ReactDOM
.createRoot(document.getElementById("root") !)
.render(
    <React.Fragment>
        <NavRoutes />
    </React.Fragment>
);



