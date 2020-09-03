import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import style from "./style";

import { routes } from "../../routes";

@withStyles(style)
class Body extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.contentWrapper}>
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
            </div>
        );
    }
}

export default Body;
