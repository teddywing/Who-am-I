// CoverFlow
(function() {
	var initialise_content_flow = function() {
		var cf = new ContentFlow('character-select', {
			reflectionColor: "#000000",
		
			onclickActiveItem: function(item) {
				alert('hello');
			}
		});
		
		return cf;
	};
	initialise_content_flow();

	// Populate characters
	
	// Change template settings to use {{}} delimiters
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};
	
	var $character_container = $('#character-select .flow');
	var character_template = _.template($('#character-image-template').html());
	$.get(
		'/character-images',
		function(response) {
			var r = JSON.parse(response);
			
			$character_container.empty()
			
			for (var i = 0; i < r.characters.length; i++) {
				$character_container.append(character_template(r.characters[i]));
			}
		}
	);
})();