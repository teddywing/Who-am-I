var App = App || null;

(function() {
	var cApp = function() {
		this.characters = null;
		this.answer = null;
		
		
		// CoverFlow
		var initialise_js_cover_flow = function(playlist) {
			coverflow('character-select-container').setup({
				width: '100%',
				playlist: playlist,
				coverheight: 130,
				textoffset: 68
			}).on('ready', function() {
				this.on('click', function() {
					alert('chosen');
				});
			});
		};
		
		this.initialize_video = function(url) {
		
		};
		
		this.get_characters = function(series_id) {
			// Populate characters
			var that = this;
			var $character_container = $('#character-select .flow');
			$.get(
				'/character-images/' + series_id,
				function(response) {
					var r = JSON.parse(response);
			
					$character_container.empty()
			
					var playlist = []
					for (var i = 0; i < r.characters.length; i++) {
						playlist.push({
							image: r.characters[i].image,
							title: r.characters[i].name
						});
					}
					initialise_js_cover_flow(playlist);
					
					that.characters = _.pluck(r.characters, 'tms_personId');
				}
			);
		};
		
		
		return this;
	};
	
	App = new cApp();
})();