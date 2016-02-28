var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        android: "./project/app/bootstrap/app_android.js",
        ios: "./project/app/bootstrap/app_ios.js"
    },
    output: {
        path: "./project/public",
        filename: "bundle_[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "babel-loader?presets[]=es2015",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader!sass-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|eot|woff|ttf|svg|json)$/,
                loader: "file-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules", "project"],
        alias: {
            "swiper": "swiper/dist/js/swiper.js",
            "lodash": "lodash/lodash.js",
            "js-marker-clusterer": "lib/js-marker-clusterer.js",
            "spin": "lib/spin.js",
            "lib": "lib",
            "scss": "scss"
        }
    },
    plugins: [
        new ExtractTextPlugin("output.css"),
        new Webpack.ProvidePlugin({
            _: "lodash",
            Spinner: "spin",
            Swiper: "swiper"
        })
    ]
};