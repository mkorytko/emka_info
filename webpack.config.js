const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin: Clean } = require("clean-webpack-plugin");
const HTML = require("html-webpack-plugin");
const CSS = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const ROOT_DIR = "./src";

let base = (ar, { mode}) => {
    return {
        entry: `${ROOT_DIR}/root.js`,
            output: {
            path: path.resolve(__dirname, "public_html"),
            filename: "js/index.[contenthash:8].js",
            chunkFilename: '[name].[id].js',
            publicPath: "",
        },

        devServer: {
            port: 3003,
        },

        optimization: {
            minimizer: mode === "production" ? [new OptimizeCSSAssetsPlugin()] : [],
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: require.resolve("babel-loader"),
                },
                {
                    test: /\.s?css$/,
                    use: [
                        {
                            loader: CSS.loader,
                            options: {
                                hmr: process.env.NODE_ENV === 'development',
                                reloadAll: true,
                            }
                        },
                        {
                            loader: require.resolve("css-loader"),
                        },
                        {
                            loader:  require.resolve("postcss-loader"),
                            options: {
                                ident: "postcss",
                                plugins: () => [
                                    require("postcss-flexbugs-fixes"), //eslint-disable-line
                                    autoprefixer({
                                        overrideBrowserslist: [
                                            ">0.2%",
                                            "not dead",
                                            "not ie < 11",
                                            "not op_mini all",
                                        ],
                                        flexbox: "no-2009",
                                    }),
                                ],
                            },
                        },
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                _: "lodash",
                React: "react",
            }),
            new Clean(),
            new HTML({
                filename: "index.html",
                template: "template.html",
                title: "eM!Ka",
                minify: false,
                bodyClass: "body-class__init"
            }),
            new CSS({
                filename: 'css/[name].css',
                chunkFilename: '[id].css',
            })
        ]
    }
};

module.exports = base;
