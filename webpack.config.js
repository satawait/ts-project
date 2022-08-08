const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // // 关闭webpack箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    module: {
        rules:[
            {
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader'
                }, 'ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [[
                                'postcss-preset-env',
                                {
                                    browsers: 'last 2 versions'
                                }
                            ]]
                        }
                    }
                }, 'less-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            // title: 'ts-study'
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': '/src/'
        }
    },
    devServer: {
        watchFiles: ['./index.html']
    }
}