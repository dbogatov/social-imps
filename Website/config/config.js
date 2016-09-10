var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'website'
		},
		port: process.env.PORT || 3000,
		db: 'postgres://socialimp:SocialImps2016@dbogatov.org:5432/socialimps'
	},

	test: {
		root: rootPath,
		app: {
			name: 'website'
		},
		port: process.env.PORT || 3000,
		db: 'postgres://socialimp:SocialImps2016@dbogatov.org:5432/socialimps'
	},

	production: {
		root: rootPath,
		app: {
			name: 'website'
		},
		port: process.env.PORT || 3000,
		db: 'postgres://socialimp:SocialImps2016@dbogatov.org:5432/socialimps'
	}
};

module.exports = config[env];
