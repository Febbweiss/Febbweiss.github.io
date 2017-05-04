$(document).ready(function() {
	$('#startBtn').on('click', function(event) {
		Yahtzee.clear(true);
		Yahtzee.scoreUp = Yahtzee.scoreDown = 0;
		$('span[id$="Score"]').html('&nbsp;');
		$("#scorePanel").hide();
		$("#launch").html(0);
		$("#launchBtn").removeClass("disabled");
	});
});