if(process.env.NODE_ENV === 'development') {
	module.exports = require('./containers/MainDev');
} else {
	module.exports = require('./containers/Main');
}
