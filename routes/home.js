var config = require('../config');

module.exports = function(req, res) {
	var data = {
		config: {
			parse: {
				application_id: config.parse.application_id,
				javascript_key: config.parse.javascript_key
			}
		}
	};
	
	res.render('index', data);
};