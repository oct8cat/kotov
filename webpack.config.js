var ExtractText = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        kotov: './src/web/js/apps/kotov/main.es',
    },
    output: {
        path: './out/web',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test: /\.es$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: ExtractText.extract('style-loader', 'css-loader')},
        ]
    },
    plugins: [
        new ExtractText('css/[name].css')
    ],
    resolve: {
        extensions: ['', '.js', '.es']
    },
    devtool: 'source-map'
}
