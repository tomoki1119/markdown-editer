const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    entry:'./src/index.tsx',
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/,
            },
        ],
    },
    resolve:{
        extensions:['.js', '.ts', '.tsx'],
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js',
        publicPath:'dist/',
    },
    devServer:{
        static:{
            directory: path.join(__dirname, 'dist')
        },
        hot:true,
        open:true
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
}