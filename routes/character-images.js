var request = require('request');
var config = require('../config');

module.exports = function(req, res) {
	this.series_id = req.params.series_id;
	this.data = {};
	
	this.data.character_images = {
		characters: []
	};
	
	this.series_request = function(series_id) {
		var that = this;
		var url = config.tms.host + '/v1/series/' + series_id + '?api_key=' + config.tms.key;
		request(url, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var r = JSON.parse(body);
				
				var request_count = 0;
				var the_other = that;
				for (var i = 0; i < r.cast.length; i++) {
					if (r.cast[i].role === 'Actor') {
						that.person_request(r.cast[i].personId, function() {
							if (request_count == (r.cast.length - 1)) {
								the_other.render();
							}
							
							request_count++;
						});
					}
				}
			}
		});
	};
	
	this.person_request = function(person_id, callback) {
		var that = this;
		var url = config.tms.host + '/v1/celebs/' + person_id + '?api_key=' + config.tms.key;
		request(url, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var r = JSON.parse(body);
				
				that.data.character_images.characters.push({
					image: 'http://developer.tmsimg.com/' + r.preferredImage.uri + '?api_key=' + config.tms.key + '&amp;h=100',
					name: r.preferredImage.caption.content,
					tms_personId: r.personId
				});
				
				callback();
			}
		});
	};
	
	this.series_request(this.series_id);
	
	this.render = function() {
		res.render('character-images', this.data);
	};
};