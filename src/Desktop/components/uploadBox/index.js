import React from "react";
import {withStyles, lighten} from "@material-ui/core/styles";
import Dropzone from "react-dropzone";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import {uploadData} from "../../../common/fetch";
import style from "./style";
import { substr, fileEx } from "helper";

class UploadedContent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            runUpload: false,
            progress: 0,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.runUpload && prevProps.runUpload !== this.props.runUpload) {
            this.uploadHandler();
        }
    }

    componentWillUnmount() {
        if (this.cancel) {
            this.cancel();
        }
    }

    cancel;

    uploadHandler = async () => {
        const body = new FormData();
        body.append("file", this.props.file);
        const { data, cancel} = await uploadData(
            "/admin/content/upload",
            body,
            this.progressUpload,
        );
        this.cancel = cancel;
        return data;
    }

    progressUpload = ({ total, loaded }) => {
        const progress = parseInt(loaded / total * 100, 10);
        if (progress === 100) {
            this.props.setUploadedFile();
        }
        this.setState({ progress });
    }

    render() {
        const {file, classes} = this.props;
        if (!file.size || file.size === 0) {
            return null;
        }
        const extension = fileEx(file);
        let size;
        if (file.size < 1000) {
            size = `${file.size}byte`;
        } else if (file.size >= 1000 && file.size < 1000000) {
            size = `${parseInt(file.size / 1000, 10)}kb`;
        } else {
            size = `${parseInt(file.size / 1e+6, 10)}mb`;
        }
        return (
            <p>
                {substr(file.name) + extension} - {size}
                <span style={{ width: `${this.state.progress}%` }} className={classes.progressBar} />
            </p>
        )
    }
}

const ColorLinearProgress = withStyles((theme) => ({
    root: {
        margin: theme.spacing(0.2)
    },
    colorPrimary: {
        backgroundColor: "#b9e7fd",
    },
    barColorPrimary: {
        backgroundColor: '#5cdeff',
    },
}))(LinearProgress);

@withStyles(style)
class UploadBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            runUpload: false,
            uploadedFiles: 0,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.runUpload && this.state.files.length === this.state.uploadedFiles) {
            this.setState({ runUpload: false });
            this.uploadedDone();
        }
    }

    onDrop = (files) => {
        this.setState((state) => ({ files: state.files.concat(files) }));
    }

    submitUpload = (runUpload) => () => {
        this.setState({ runUpload });
    }

    setUploadedFile = () => {
        this.setState((state) => ({ uploadedFiles: ++state.uploadedFiles }));
    }

    uploadedDone = () => {
        console.log("Uploaded!");
        // this.setState({
        //     files: [],
        //     runUpload: false,
        //     uploadedFiles: 0,
        // })
    }

    render() {
        const { classes } = this.props;
        const { files, runUpload } = this.state;
        return (
                <Card className={classes.dropZoneContainer}>
                    <Dropzone
                        multiple
                        onDrop={this.onDrop}
                        >
                        {({getRootProps, getInputProps}) => (
                            <div className={classes.dropZoneWrapper}>
                                <div {...getRootProps({className: classes.dropZone})}>
                                    <input {...getInputProps()} />
                                    <p>Files</p>
                                </div>
                                <div className={classes.filesListContainer}>
                                    {
                                        files.map((file) => (
                                            <UploadedContent
                                                setUploadedFile={this.setUploadedFile}
                                                runUpload={runUpload}
                                                key={file.name}
                                                file={file}
                                                classes={classes} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                        }
                    </Dropzone>
                    {
                        runUpload &&  <ColorLinearProgress />
                    }
                    <Box display="flex" >
                        <Button
                            className={classes.buttonsUploadForm}
                            disabled={runUpload}
                            variant="outlined"
                            onClick={() => this.setState({ files: [] })}>
                            Очистить
                        </Button>
                        <Button
                            className={classes.buttonsUploadForm}
                            disabled={runUpload}
                            variant="outlined"
                            onClick={this.submitUpload(true)}>
                            Зугрузить
                        </Button>
                    </Box>
            </Card>
        )
    }
}

export default React.memo(UploadBox);
