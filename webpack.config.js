const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const HTML = require("html-webpack-plugin");
const CSS = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const Terser = require("terser-webpack-plugin");

const entries = [
    {
        title: "EM_KA",
        name: "client",
        bodyClass: "body-class__init",
    },
    {
        title: "EM_KA_admin",
        name: "admin",
        bodyClass: "admin-class__init",
    },

]

const DEV_MODE = process.env.NODE_ENV === "production";

let base = {
    entry: {
        app: `./src/index.js`,
    },
    output: {
        path: path.resolve(__dirname, "public_html"),
        filename: DEV_MODE ? "js/[name].[contenthash:8].js" : "js/[name].js",
        chunkFilename: 'js/[name].js',
        publicPath: "",
    },

    devServer: {
        compress: true,
        port: 3003,
    },

    optimization: {
        minimizer: DEV_MODE ? [new OptimizeCSSAssetsPlugin(), new Terser()] : [],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },

    resolve: {
        alias: {
            "react": path.resolve(__dirname, "node_modules/react"),
            "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
            "@material-ui": path.resolve(__dirname, "node_modules/@material-ui"),
            "moment": path.resolve(__dirname, "node_modules/moment"),
            "helper": path.resolve(__dirname, "src/common/helper.js"),
        },
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
                            hmr: !DEV_MODE,
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
            },
            {
                test: /\.(bmp|gif|jpe?g|png|svg|obj|mtl|gltf|bin|glb|hdr|fbx)$/,
                loader: require.resolve("file-loader"),
                options: {
                    limit: 10000,
                    name: "assets/images/[name].[contenthash:8].[ext]",
                },
            },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: false }),
        new webpack.HashedModuleIdsPlugin(),
        // new webpack.ProvidePlugin({
        //     // _: "lodash",
        // }),
        new webpack.DefinePlugin({
            // __DEV__: process.env.DB_PORT,
        }),
        ...entries.map((el) => (
            new HTML({
                filename: el.name !== "client" ? `${el.name}.html` : "index.html",
                template: "template.html",
                title: el.title,
                minify: false,
                bodyClass: el.bodyClass,
            })
        )),
        new CSS({
            filename: 'css/[name].css',
            chunkFilename: '[name].css',
        }),
    ]
};

if (process.env.ANALIZE) {
    console.log(base)
    base.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = base;
