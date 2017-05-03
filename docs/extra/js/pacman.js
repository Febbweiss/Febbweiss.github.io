$(document).ready(function() {
	$('#startBtn').on('click', function(event) {
		for( var i = 1; i < 4; i++) {
			$("#life" + i).css('opacity', '100');
			$("#life" + i).show();
		}
		SCOREBOARD.score = Game.score = 0;
		Game.level = -1;
		Game.lives = 3;
		Game.init();
	});
});