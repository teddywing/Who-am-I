module.exports = function(req, res) {
	this.success = req.params.success;
	
	this.data = {
		success: this.success,
		character_name: req.query.character_name,
		character_image_url: req.query.character_image_url
	};
	
	res.render('character-chosen-dialog', this.data);
};