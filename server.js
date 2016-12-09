'use strict';

var config = require('config');
var fs = require('fs');
var _ = require('underscore');
var http = require('http');
// var https = require('https');
var path = require('path');
var url = require( 'url' );
var express = require('express');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var csurf = require('csurf');
var compress = require('compression');
var app = module.exports = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || config.port);

app.use(methodOverride());
app.use(cookieParser());

if(config.name !== 'development') {
    app.use(express.compress());
}

var env = process.env.NODE_ENV || 'development';
switch(env) {
    case 'production': case 'prod':
        app.use(
            expressSession({
                store: new expressSession.MemoryStore(),
                secret: 'ALL_YOUR_BASE_ARE_BELONG_TO_MEH',
                key: 'reactjs-boierplate',
                cookie: {
                    httpOnly: true
                },
                resave: true,
                saveUninitialized: true
            })
        );
    break;

    case 'development': case 'dev': default:
        app.use(
            expressSession({
                store: new expressSession.MemoryStore(),
                secret: 'ALL_YOUR_DEVBASE_ARE_BELONG_TO_MEH',
                key: 'reactjs-boierplate-dev',
                cookie: {
                    httpOnly: true
                },
                resave: true,
                saveUninitialized: true
            })
        );
    break;
}

var conditionalCSRFWhitelist = ['/some/protected/path'];
var conditionalCSRFMiddleware = csurf();
var conditionalCSRF = function (req, res, next) {
    if(conditionalCSRFWhitelist.indexOf(req.url) !== -1) {
        next();
    } else {
        conditionalCSRFMiddleware(req, res, next);
    }
};

app.use(conditionalCSRF);

app.get('/', function(req, res) {
    var viewToRender = config.name === 'development' ? 'dev' : 'index';

    res.render(viewToRender, {
        token: req.csrfToken(),
        user: req.session.user,
        config: config.util.cloneDeep(config)
    });
});

// Get select environment information (for debugging environments)
app.get('/config' , function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200 , 'OK');
    res.write(JSON.stringify({
        'process.env.NODE_ENV': process.env.NODE_ENV,
        'config.name': config.name,
    }, null, 4));

    res.end();
});

if(config.name === 'development') {
    var webpack = require('webpack');
    var webpackConfig = require('./buildconfigs/dev.config');
    var compiler = webpack(webpackConfig);

    app.use(
        require('webpack-dev-middleware')(compiler, {
            noInfo: false,
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true
            }
        })
    );

    app.use(
        require('webpack-hot-middleware')(compiler, {
            log: console.log,
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000
        })
    );

    console.log('Express DEV server listening on port %d with NODE_ENV=%s', app.get('port'), config.name);
} else {
    console.log('Express server listening on port %d with NODE_ENV=%s', app.get('port'), config.name);
}

http.createServer(app).listen(
    app.get('port')
);
