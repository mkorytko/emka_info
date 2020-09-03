export default (theme) => ({
    root: {
        display: 'flex',
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
});
