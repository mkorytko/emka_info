import React from "react";
import ErrorMSG from "./errorMSG";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo: {
                errorTitle: error.message,
                msg: errorInfo.componentStack,
            },
        })
    }

    render() {
        if (this.state.errorInfo) {
            return <ErrorMSG {...this.state.errorInfo} />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
