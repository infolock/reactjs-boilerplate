var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

var config = {
    entry: {
        dist: ['./entry.js', hotMiddlewareScript],
        vendor: ['jquery', 'underscore', 'moment', 'bootstrap', 'react']
    },
    devtool: 'eval',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
          {
              test: /\.js$/,
              loader: 'babel',
              exclude: /(node_modules)/,
              query: {
                  compact: false
              }
          },
          {
              test: /\.less$/,
              loader: 'style!raw!less'
          },
          {
              test: /\.css$/,
              loader: 'style!raw'
          },
          {
              include: /\.json$/,
              loaders: ['json-loader']
          }
        ]
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true
    },
    resolve: {
        alias: {
            'react-bootstrap/lib/modal' : 'react-bootstrap/lib/Modal',
            'react-bootstrap/lib/button' : 'react-bootstrap/lib/Button',
            'react-bootstrap/lib/alert' : 'react-bootstrap/lib/Alert',
            'react-bootstrap/lib/panelGroup' : 'react-bootstrap/lib/PanelGroup',
            'react-bootstrap/lib/panel' : 'react-bootstrap/lib/Panel',
            'react-bootstrap/lib/well' : 'react-bootstrap/lib/Well',
            'react-bootstrap/lib/modalTrigger' : 'react-bootstrap/lib/ModalTrigger',
            'react-bootstrap/lib/popover' : 'react-bootstrap/lib/Popover',
            'react-bootstrap/lib/input' : 'react-bootstrap/lib/Input',
            'react-bootstrap/lib/overlayTrigger' : 'react-bootstrap/lib/OverlayTrigger'
        },
        modulesDirectories: ['node_modules', 'src', 'libs'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $:      'jquery',
            jQuery: 'jquery',
            moment: 'moment',
            underscore: 'underscore',
            bootstrap: 'bootstrap',
            react: 'react'
        })
    ]
};

module.exports = config;
