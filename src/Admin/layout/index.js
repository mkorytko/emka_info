import React from "react";
import {withStyles} from "@material-ui/core";
import style from "./style";

const Header = React.lazy(() => import("./Header"));
const Aside = React.lazy(() => import("./Aside"));
const Body = React.lazy(() => import("./Body"));

@withStyles(style)
class Layout extends React.Component {
    render() {
        const { classes, admin } = this.props;
        return (
            <div className={classes.root}>
                <Header>
                    {
                        () => ( <Aside/> )
                    }
                </Header>
                <Body />
            </div>
        );
    }
}

export default Layout;
