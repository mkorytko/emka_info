import React from "react";
import { Provider } from "react-redux";
import "../style.css";
// import "../main.scss";
import ThemeProvider from "../common/theme";
import Layout from "./layout";
import store from "./store";


const Desktop = (props) => {
    return (
        <Provider store={store}>
            <div className="root">
                <ThemeProvider>
                    {
                        (toggleThemes) => <Layout toggleThemes={toggleThemes} {...props} />
                    }
                </ThemeProvider>
            </div>
        </Provider>
    )
}

export default Desktop;
