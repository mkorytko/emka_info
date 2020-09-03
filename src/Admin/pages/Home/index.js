import React from "react";
import {withStyles} from "@material-ui/core";
import style from "./style";
import UploadBox from "../../../Desktop/components/uploadBox";

@withStyles(style)
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const { classes } = this.props;
        const { files } = this.state;
        return (
            <div>
                <UploadBox />
            </div>
        )
    }
}

export default Home;
