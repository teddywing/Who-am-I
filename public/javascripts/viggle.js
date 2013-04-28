(function() {
	function onBridgeIsReady () {
		VAPP.setTitleBarTitle(function(message) {}, 'Who am I?');
		
		VAPP.getCurrentShow(function (message) {
			var showInfo = JSON.parse(message);
			if (showInfo.status !== 'success') {
				VAPP.showModal(function(message) {}, 'Oops ...', null, 'Unable to get show info.', 'Please try again.', false);
				return;
			}
			
			// Name of the current show
			var showName = showInfo.data.program_data.program_title;
			
			VAPP.setTitleBarSubTitle(function(message) {}, showName);
		});
	}
	
	document.addEventListener('VAPPReady', onBridgeIsReady, true);
})();