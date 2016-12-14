$(document).ready(function(){

	makeGrid(16, 16);								//Initialize 16x16 grid.

	$(".button").click(function(){
		var size = prompt("Please enter the size of your grid.");
		$('#container').empty();
		makeGrid(size, size);
	});

	
});

function makeGrid(row, col){						//Function for creating grid of size row x col.
	for(var i = 1; i <= row; i++){
		$("#container").append('<tr id="row' + i + '"></tr>');
		for(var j = 1; j <= col; j++){
			$('#row' + i + '').append('<td id="col' + j + '" class="cols"></td>');
		}
	}
	$(".cols").hover(function(){					//Change color of grid element if hovered over.
		$(this).css("background-color", "red");
	});
}