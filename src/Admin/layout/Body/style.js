import { headerHeight } from "../../../common/themeConstants";

export default (theme) => {
    return {
        contentWrapper: {
            marginTop: headerHeight,
            color: "red",
            width: "100%",
            padding: theme.spacing(1),
        }
    }
}
