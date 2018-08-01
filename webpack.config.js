const path = require("path");
const webpack = require("webpack");

module.exports = {
    /*分离 应用程序(app) 和 第三方库(vendor) 入口*/
    entry: {
        app: './app/main.js',
        //vendors: './src/vendors.js'
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
        filename: 'build.js'
    },
    /*loader预处理文件*/
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
           /* {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'stage-0']}
            },*/
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // 运行时构建 VS 独立构建
    /*resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    },
    devServer: {
        historyApiFallback: true,
            noInfo: true
    },
    devtool: '#eval-source-map'*/
}


/*if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}*/







