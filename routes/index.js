module.exports = function(app) {
	var index = require('./home')
	  , character_images = require('./character-images')
	  , character_chosen_dialog = require('./character-chosen-dialog');
	
	app.get('/', index);
	app.get('/character-images/:series_id', character_images);
	app.get('/character-chosen/:success', character_chosen_dialog);
};