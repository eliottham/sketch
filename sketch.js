$(document).ready(function(){
	var row = 16;
	var col = 16;

	for(var i = 1; i <= row; i++){
		$("#container").append('<div id="row' + i + '" class="rows"></div>');
		for(var j = 1; j <= col; j++){
			$('#row' + i + '').append('<div id="col' + j + '" class="cols"></div>');
		}
	}
	$(".cols").hover(function(){
		$(this).css("background-color", "red");
	});



	
	});