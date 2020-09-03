export default (theme) => {
    return ({
        dropZoneContainer: {
            width: 374,
        },
        dropZoneWrapper: {
            display: "flex",
            justifyContent: "space-between",
            width: "inherit",
            height: 120,
        },
        dropZone: {
            display: "flex",
            padding: 0,
            cursor: "pointer",
            border: "1px dashed black",
            alignItems: "center",
            justifyContent: "center",
            flex: "0 1 51%",
        },
        filesListContainer: {
            flex: "0 1 49%",
            overflow: "auto",
            fontSize: "0.75rem",
            padding: "0 5px",
            "& p": {
                position: "relative",
                margin: "0.25rem 0",
            }
        },
        progressBar: {
            position: "absolute",
            display: "block",
            height: "100%",
            left: 0,
            top: 0,
            backgroundColor: "rgba(174,82,255, 0.3)",
            transition: theme.transitions.create(['width'], {
                easing: theme.transitions.easing.sharp,
                duration: 50,
            }),
        },
        uploadActive: {
            borderColor: "red",
        },
        buttonsUploadForm: {
            flex: "1 0 auto",
        }
    });
}
