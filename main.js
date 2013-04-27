(function() {
	var cf = new ContentFlow('character-select', {
		reflectionColor: "#000000",
		
		onclickActiveItem: function(item) {
			alert('hello');
		}
	});
})();