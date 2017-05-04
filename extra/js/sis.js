$(document).ready(function() {
	$('#startBtn').on('click', function(event) {
		Game.running = false;
		Game.wave_index = -1;
		Game.wave = undefined;
		Game.aliens = [];
		Game.ship = null;
		Game.score = 0;
		Game.shots = {
			total : 0,
			lost : 0
		};
		Game.init();
		$.loadCallback(function(percent){
				$("#loadingBar").width(400*percent);
		});
		$.playground().startGame(
			function() {
				$("#welcomeScreen").remove();
			}
		);
	});
});