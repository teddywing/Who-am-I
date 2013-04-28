module.exports = function(app) {
	var index = require('./home')
	  , character_images = require('./character-images');
	
	app.get('/', index);
	app.get('/character-images/:series_id', character_images);
};