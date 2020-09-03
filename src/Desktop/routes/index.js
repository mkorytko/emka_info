import Home from "../pages/HomePage";
import One from "../pages/One";
import Two from "../pages/Two";

import HomeOutlined from "@material-ui/icons/HomeOutlined";
import AlbumOutlined from "@material-ui/icons/AlbumOutlined";
import AspectRatioOutlined from "@material-ui/icons/AspectRatioOutlined";

export const links = [
    {
        id: 1,
        title: "home",
        to: "/",
        name: "Home",
        icon: HomeOutlined,
    },
    {
        id: 2,
        title: "one",
        to: "/one",
        name: "One",
        icon: AlbumOutlined,
    },
    {
        id: 3,
        title: "two",
        to: "/two",
        name: "Two",
        icon: AspectRatioOutlined,
    },
];

export const routes = [
    {
        id: 1,
        exact: true,
        path: "/",
        component: Home,
    },
    {
        id: 2,
        exact: false,
        path: "/one",
        component: One,
    },
    {
        id: 3,
        exact: false,
        path: "/two",
        component: Two,
    },
];
