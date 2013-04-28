// CoverFlow
(function() {
	var initialise_js_cover_flow = function(playlist) {
		coverflow('character-select-container').setup({
			width: '100%',
			playlist: playlist,
			coverheight: 200,
			textoffset: 30
		}).on('ready', function() {
			this.on('click', function() {
				alert('chosen');
			});
		});
	};

	// Populate characters
	
	// Change template settings to use {{}} delimiters
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};
	
	var $character_container = $('#character-select .flow');
	$.get(
		'/character-images/8680539',
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
		}
	);
})();