import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import LogoutIcon from '@material-ui/icons/ExitToAppOutlined';
import style from "./style";
import { getData } from "../../../common/fetch";

function logOut() {
    return getData("/user/logout").then(() => window.location.href = "/");
}

const Header = ({ classes, children }) => {
    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, classes.appBarShift)}
            >
                <Toolbar className={classes.toolbarRootOpened}>
                    <IconButton onClick={logOut}>
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {children()}
        </>
    )
}

export default withStyles(style)(Header);
