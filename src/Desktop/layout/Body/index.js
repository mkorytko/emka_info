import React from "react";
import { Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import style from "./style";
import { routes } from "../../routes";
import ErrorBoundary from "../../../common/ErrorBoundary/ErrorBoundary";

@withStyles(style)
class Body extends React.PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.contentWrapper}>
                <ErrorBoundary>
                    <Switch>
                        {
                            routes.map((page) => (
                                <Route
                                    key={page.id}
                                    path={page.path}
                                    exact={page.exact}>
                                    <page.component />
                                </Route>
                            ))
                        }
                    </Switch>
                </ErrorBoundary>
            </div>
        );
    }
}

export default Body;
