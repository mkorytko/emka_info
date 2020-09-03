import React from "react";
import { withStyles } from "@material-ui/core";
import style from "./style";
import Alert from "../../common/alert";

const Header = React.lazy(() => import("./Header"));
const Aside = React.lazy(() => import("./Aside"));
const Body = React.lazy(() => import("./Body"));

@withStyles(style)
class Layout extends React.Component {
    render() {
        const { classes, admin } = this.props;
        return (
            <Alert>
                <div className={classes.root}>
                    <Header admin={admin} toggleThemes = {this.props.toggleThemes}>
                        {
                            (open, handleDrawerClose) => (
                                <Aside
                                    admin={admin}
                                    open={open}
                                    handleDrawerClose={handleDrawerClose} />
                            )
                        }
                    </Header>
                    <Body />
                </div>
            </Alert>
        );
    }
}

export default Layout;
