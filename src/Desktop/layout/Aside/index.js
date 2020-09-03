import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {withStyles} from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../../assets/images/logo.jpg";
import style from "./style";

import { links } from "../../routes";

const Aside = ({ classes, open, handleDrawerClose }) => {
    const params = useRouteMatch("/:slug");
    const activeLink = params ? params.params.slug : "home";
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <Avatar className={classes.avatarIcon} src={logo} />
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                {links.map((link, index) => (
                    <ListItem
                        selected={activeLink === link.title}
                        button key={link.id}
                        component={Link}
                        to={link.to}>
                        <ListItemIcon>{<link.icon />}</ListItemIcon>
                        <ListItemText primary={link.name}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </Drawer>
    )
};

export default withStyles(style)(Aside);
