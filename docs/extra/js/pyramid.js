$(document).ready(function() {
	$('#startBtn').on('click', function(event) {
		for( var i = 0; i < 52; i++ ) {
			Deck.cards[i] = i +1;
		}
		$('img[id^="card"]').remove();
		$("#drawn").removeClass();
		$("#stock").addClass("card").addClass("background");
		Pyramid.init();
	});
});