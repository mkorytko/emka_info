import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {withStyles} from "@material-ui/core";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Client from '@material-ui/icons/DesktopMacOutlined';
import style from "./style";

import { links } from "../../routes";

const Aside = ({ classes, open, handleDrawerClose }) => {
    const params = useRouteMatch("/:slug");
    const activeLink = params ? params.params.slug : null;
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, classes.drawerOpen)}
            classes={{ paper: classes.drawerOpen }}
        >
            <List>
                <ListItem
                    button
                    component={Link}
                    to="/">
                    <ListItemIcon>{<Client />}</ListItemIcon>
                    <ListItemText primary="Морда"/>
                </ListItem>
            </List>
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
