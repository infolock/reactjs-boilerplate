var webpack = require('webpack');

var config = {
    entry: {
        dist: './entry.js',
        vendor: ['jquery', 'underscore', 'moment', 'bootstrap', 'react']
    },
    devtool: 'source-map',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '../public/[name]/[name].bundle.js'
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
        json2: 'json2/json2',
        'react-bootstrap/lib/modal' : 'react-bootstrap/lib/Modal',
        'react-bootstrap/lib/button' : 'react-bootstrap/lib/Button',
        'react-bootstrap/lib/alert' : 'react-bootstrap/lib/Alert',
        'react-bootstrap/lib/panelGroup' : 'react-bootstrap/lib/PanelGroup',
        'react-bootstrap/lib/panel' : 'react-bootstrap/lib/Panel',
        'react-bootstrap/lib/well' : 'react-bootstrap/lib/Well',
        'react-bootstrap/lib/modal' : 'react-bootstrap/lib/Modal',
        'react-bootstrap/lib/popover' : 'react-bootstrap/lib/Popover',
        'react-bootstrap/lib/input' : 'react-bootstrap/lib/Input',
        'react-bootstrap/lib/overlayTrigger' : 'react-bootstrap/lib/OverlayTrigger'
      },
      modulesDirectories: ['node_modules', 'src', 'libs']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'../public/dist/vendor.bundle.js'),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $:      'jquery',
            jQuery: 'jquery',
            moment: 'moment',
            underscore: 'underscore',
            bootstrap: 'bootstrap',
            bootstrap: 'bootstrap',
            react: 'react'
        })
    ]
};

module.exports = config;
