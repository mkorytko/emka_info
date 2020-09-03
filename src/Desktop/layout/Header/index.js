import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import LightIcon from '@material-ui/icons/Brightness5Outlined';
import DarkIcon from '@material-ui/icons/Brightness3Outlined';
import AdminIcon from '@material-ui/icons/SupervisorAccountRounded';
import style from "./style";
import ErrorBoundary from "../../../common/ErrorBoundary/ErrorBoundary";

const Header = ({ classes, toggleThemes, admin, children }) => {
    const { palette: { type }} = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={clsx({
                    [classes.toolbarRootClosed]: !open,
                    [classes.toolbarRootOpened]: open,
                })}>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box>
                        <IconButton onClick={toggleThemes}>
                            {
                                type === "light" ? <DarkIcon /> : <LightIcon />
                            }
                        </IconButton>
                        {
                            admin && (
                                <IconButton
                                    component={Link}
                                    to="/admin"
                                >
                                    <AdminIcon />
                                </IconButton>
                            )
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <ErrorBoundary>
                {children(open, handleDrawerClose)}
            </ErrorBoundary>
        </>
    )
}

export default withStyles(style)(Header);
