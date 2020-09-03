import React from "react";
import "./style.css";
import "./main.scss";
import ThemeProvider from "./common/theme";

const Desktop = () => (
    <div className="root">
        <ThemeProvider>
            {
                (toggleThemes) => <Layout toggleThemes={toggleThemes}/>
            }
        </ThemeProvider>
    </div>
)

export default Desktop;
