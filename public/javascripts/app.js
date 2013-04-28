var App = App || null;

(function() {
	var cApp = function() {
		this.characters = [];
		this.answer = null;
		this.playlist = []
		
		
		// CoverFlow
		var initialise_js_cover_flow = function(playlist) {
			var that = this;
			coverflow('character-select-container').setup({
				width: '100%',
				playlist: playlist,
				coverheight: 130,
				textoffset: 68
			}).on('ready', function() {
				var the_other = that;
				this.on('click', function(e) {
//					if (the_other.answer == 
					console.log(e);
					var selection = this.playlist[e];
//					alert('chosen');
				});
			});
		};
		
		this.initialize_video = function(url) {
			console.log(url);
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
					
					for (var i = 0; i < r.characters.length; i++) {
						that.playlist.push({
							image: r.characters[i].image,
							title: r.characters[i].name
						});
						
						that.characters.push({
							personId: r.characters[i].tms_personId,
							name: r.characters[i].name
						});
					}
					initialise_js_cover_flow(that.playlist);
				}
			);
		};
		
		
		return this;
	};
	
	App = new cApp();
})();