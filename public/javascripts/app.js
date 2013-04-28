var App = App || null;

(function() {
	var cApp = function() {
		this.characters = [];
		this.answer = null;
		this.answer_name = '';
		this.playlist = []
		
		
		// CoverFlow
		this.initialise_js_cover_flow = function(playlist) {
			var that = this;
			coverflow('character-select-container').setup({
				width: '100%',
				playlist: playlist,
				coverheight: 130,
				textoffset: 68
			}).on('ready', function() {
				var the_other = that;
				this.on('click', function(e) {
					if (the_other.playlist[e].title == the_other.answer_name) {
						// Answered correctly
						the_other.correct_answer();
					}
				});
			});
		};
		
		this.initialize_video = function(url) {
			var $video = $('<video src="' + url + '" controls>\
				Your browser does not support the <code>video</code> element.\
			</video>');
			$('section.video').append($video);
		};
		
		this.get_characters = function(series_id, params) {
			// Populate characters
			var that = this;
			var params = params || {
				answer_id: -1
			};
			var $character_container = $('#character-select .flow');
			$.get(
				'/character-images/' + series_id,
				function(response) {
					var r = JSON.parse(response);
			
					$character_container.empty()
					
					for (var i = 0; i < r.characters.length; i++) {
						that.playlist.push({
							image: r.characters[i].image,
							title: r.characters[i].name
						});
						
						that.characters.push({
							personId: r.characters[i].tms_personId,
							name: r.characters[i].name
						});
						
						if (params.answer_id == r.characters[i].tms_personId) {
							that.answer_name = r.characters[i].name;
						}
					}
					that.initialise_js_cover_flow(that.playlist);
				}
			);
		};
		
		this.correct_answer = function() {
			alert('chosen');
		};
		
		
		return this;
	};
	
	App = new cApp();
})();