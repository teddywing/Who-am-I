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
				var actor_count = r.cast.length;
				var the_other = that;
				for (var i = 0; i < r.cast.length; i++) {
					that.person_request(r.cast[i].personId, {character_name: r.cast[i].characterName}, function(success) {
						if (request_count == (actor_count - 1)) {
							the_other.render();
						}
						
						if (!success) {
							actor_count--;
						}
						request_count++;
					});
				}
			}
			else {
				console.log('ERROR:'+error);
				console.log('STATUS-CODE:'+response.statusCode);
			}
		});
	};
	
	this.person_request = function(person_id, params, callback) {
		var that = this;
		var params = params || {
			character_name: ''
		};
		var url = config.tms.host + '/v1/celebs/' + person_id + '?api_key=' + config.tms.key;
		request(url, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var r = JSON.parse(body);
				
				that.data.character_images.characters.push({
					image: 'http://developer.tmsimg.com/' + r.preferredImage.uri + '?api_key=' + config.tms.key + '&amp;h=100',
					name: params.character_name,
					tms_personId: r.personId
				});
				
				callback(true);
			}
			else {
				callback(false);
			}
		});
	};
	
	this.series_request(this.series_id);
	
	this.render = function() {
		res.render('character-images', this.data);
	};
};