var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var options = {
	root: rootPath,
	app: {
		name: 'website'
	},
	port: process.env.PORT || 80
};

var config = {
	development: options,
	test: options,
	production: options
};

module.exports = config[env];