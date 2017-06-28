var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client') + '/app/main.js',
    output: {
        path: path.resolve(__dirname, 'client') + '/dist/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'client'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};