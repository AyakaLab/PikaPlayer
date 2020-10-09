const path = require('path');

module.exports = {
    mode: 'development',

    devtool: 'cheap-module-source-map',

    entry: {
        PikaPlayer: './src/js/pikaplayer.js',
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true,
        publicPath: '/',
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss'],
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    }
                ],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.art$/,
                loader: 'art-template-loader',
            },
        ],
    },

    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname, '..', 'dev'),
        clientLogLevel: 'none',
        quiet: false,
        open: true,
        historyApiFallback: {
            disableDotRule: true,
        },
        watchOptions: {
            ignored: /node_modules/,
        },
    },

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },

    performance: {
        hints: false,
    },
};