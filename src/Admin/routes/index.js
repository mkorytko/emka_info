import Home from "../pages/Home";

import HomeIcon from '@material-ui/icons/AppsOutlined';
import AlbumOutlined from "@material-ui/icons/AlbumOutlined";
import AspectRatioOutlined from "@material-ui/icons/AspectRatioOutlined";

export const links = [
    {
        id: 1,
        title: "admin",
        to: "/admin",
        name: "Main",
        icon: HomeIcon,
    },
];

export const routes = [
    {
        id: 1,
        exact: true,
        path: "/admin",
        component: Home,
    },
];
