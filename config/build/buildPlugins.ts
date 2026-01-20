import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WatchExternalFilesPlugin from 'webpack-watch-files-plugin'
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {
        isDev,
        paths
    } = options
    
    return [
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].[contenthash:4].css' : '[name].css',
        }),
        new webpack.ProgressPlugin(),
        new WatchExternalFilesPlugin({
            files: ['src/**/*.html', 'src/*.html'],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/images",
                    to: "./assets/images/",
                    noErrorOnMissing: true,
                },
                {
                    from: "src/assets/fonts",
                    to: "./assets/fonts/",
                    noErrorOnMissing: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: paths.htmlEntry,
            filename: 'index.html',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: paths.htmlEntities,
            filename: 'entities.html',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: paths.htmlUI,
            filename: 'ui.html',
            minify: false,
        }),
    ];
}
