var ParseInterface = ParseInterface || null;

(function() {
	var cParseInterface = function() {
		var application_id = '6jaGjImHFtbJLkAWJRnnLTHfD01nmWHAIrAKNYge';
		var javascript_key = 'zA6og358R2Wg5NVAHWj81zeFz2WQZ5u2AhHFPCjN';
		Parse.initialize(application_id, javascript_key);
	
		var ContestObject = Parse.Object.extend('ContestObject');
	
		this.get_last_charade = function() {
			var that = this;
			var query = new Parse.Query(ContestObject);
			query.limit(1);
			query.descending('createdAt');
			query.find({
				success: function(response) {
					that._process_charade(response[0]);
				}
			});
		};
	
		this._process_charade = function(contest_instance) {
			var video_url = contest_instance.get('video_url');
			var series_id = contest_instance.get('series_id');
			
			App.answer = contest_instance.get('person_id');
			App.initialize_video(video_url);
			App.get_characters(series_id, { answer_id: App.answer });
		};
		
		
		return this;
	};
	
	ParseInterface = new cParseInterface();
})();