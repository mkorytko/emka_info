import React from "react";
import "./style.css";

export default ({ errorTitle, msg }) => {
    return (
        <div className="boundary-error-wrapper">
            <h3 className="boundary-error-wrapper__title">
                Crash!!!
            </h3>
            <p className="boundary-error-wrapper__type">{errorTitle}</p>
            <p className="boundary-error-wrapper__msg">{msg}</p>
        </div>
    )
}
