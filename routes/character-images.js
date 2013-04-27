module.exports = function(req, res) {
	var data = {};
	
	data.character_images = [
		{
			image: '/images/characters-sample/homer.png',
			name: 'Homer'
		},
		{
			image: '/images/characters-sample/marge.png',
			name: 'Marge'
		},
		{
			image: '/images/characters-sample/lisa.png',
			name: 'Lisa'
		},
		{
			image: '/images/characters-sample/bart.png',
			name: 'Bart'
		},
		{
			image: '/images/characters-sample/maggie.png',
			name: 'Maggie'
		}
	];
	
	res.render('character-images', data);
};