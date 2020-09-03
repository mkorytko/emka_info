export default () => ({
    dropZoneWrapper: {
        width: 200,
        height: 100,
        "& .asd": {
            margin: 0,
            padding: 0,
        }
    },
    dropZone: {
        padding: 0,
        cursor: "pointer",
        border: "1px dashed black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
