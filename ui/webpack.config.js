let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public/'),
        inline: true,
        port: 3000,
        proxy: {
            '/auth/**': {
                target: { host: 'localhost', port: 8080, protocol: 'https:' },
                secure: true
            },
            '/api/**': {
                target: { host: 'localhost', port: 8080, protocol: 'https:' },
                secure: true
            }
        },
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["es2015","stage-0","react"],    // используемые плагины
                    plugins: [
                        "transform-decorators-legacy","transform-async-to-generator","transform-class-properties",["babel-plugin-transform-runtime",  {
                            "helpers": false,
                            "polyfill": false,
                            "regenerator": true,
                            "moduleName": "babel-runtime"
                        }],
                        ['import', { libraryName: "antd", style: true }]
                    ],
                },
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "less-loader"}
            ]
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        devFlagPlugin,
    ],

};