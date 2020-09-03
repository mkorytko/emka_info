import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import {
    PRIMARY,
    SECONDARY,
    headerHeight,
} from "./themeConstants";

const gilroy = {
    fontFamily: "Gilroy, sans-serif",
};

const customTheme = {
    typography: {
        fontFamily: gilroy.fontFamily,
        h5: {
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 400,
            fontSize: 22,
        },
        h1: gilroy,
        h2: gilroy,
        h3: gilroy,
        h4: gilroy,
        h6: gilroy,
        fontSize: 16,
        htmlFontSize: 16,
    },
    palette: {
        primary: PRIMARY,
        secondary: SECONDARY,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    status: {
        danger: orange[500],
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    },
    // mixins: {
    //     toolbar: {
    //         minHeight: 64,
    //         "@media (min-width:0px) and (orientation: landscape)": {
    //             minHeight: 56,
    //         },
    //         "@media (min-width:600px)": {
    //             minHeight: 72,
    //         }
    //     }
    // },
    overrides: {
        MuiToolbar: {
            root: {
                height: headerHeight,
            },
        },
    }
};

// console.log(customTheme)

const useDarkMode = () => {
    const [theme, toggleTheme] = React.useState(customTheme);
    const { palette: { type } } = theme;
    const toggleDarkTheme = () => {
        const updatedTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                type: type === "dark" ? "light" : "dark",
            }
        }
        toggleTheme(updatedTheme);
    }

    return [theme, toggleDarkTheme];
}

const CustomThemeProvider = (props) => {
    const [theme, toggleThemes] = useDarkMode();
    const themeConfig = createMuiTheme(theme);
    return (
        <ThemeProvider theme={themeConfig}>
            <CssBaseline />
            {
                typeof props.children === "function"
                    ? props.children(toggleThemes)
                    : props.children
            }
        </ThemeProvider>
    );
};

export default CustomThemeProvider
