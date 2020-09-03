import { asideWidth } from "../../../common/themeConstants";

export default (theme) => ({
    root: {
        display: 'flex',
    },
    toolbarRootClosed: {
        justifyContent: "space-between",
    },
    toolbarRootOpened: {
        justifyContent: "flex-end",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: asideWidth,
        width: `calc(100% - ${asideWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
});
