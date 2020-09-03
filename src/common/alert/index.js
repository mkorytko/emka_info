import React from "react";
import * as PropTypes from "prop-types";
import { SnackbarProvider } from "notistack";
import { Slide } from "@material-ui/core";

class Alert extends React.PureComponent {
    config = {
        dense: true,
        autoHideDuration: 2000,
        variant: "warning",
        maxSnack: 2,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
        },
        onExited: this.props.onExited || null,
        onEntered: this.props.onEntered || null,
        TransitionComponent: Slide,
    }

    render() {
        return (
            <SnackbarProvider {...this.config}>
                {this.props.children}
            </SnackbarProvider>
        )
    }
}

Alert.propTypes = {
    onExited: PropTypes.func,
    onEntered: PropTypes.func,
}

export default Alert;
