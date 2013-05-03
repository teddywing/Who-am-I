var config = {}

config.tms = {
	host: 'http://data.tmsapi.com',
	key: process.env.TMS_API_KEY
};

config.parse = {
	application_id: process.env.PARSE_COM_APPLICATION_ID,
	javascript_key: process.env.PARSE_COM_JAVASCRIPT_KEY
};

module.exports = config;