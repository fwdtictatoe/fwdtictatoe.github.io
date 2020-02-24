$(document).ready(function() {

	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;
	var winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6], 
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
    ];
	
	var indexBox = ['one','two','three','four','five','six','seven','eight','nine'];
	console.log("running game")

	$('#game > li').click(function(){
		if (getWinner('o', indexBox, winningCombos) == true){
			alert('O has won the game. Start a new game')
			resetGame();
		}else if (getWinner('x', indexBox, winningCombos) == true){
			alert('X wins has won the game. Start a new game')
			resetGame();   
		}else if (count == 9){
			alert('Its a tie. It will restart.')
			resetGame();
		}else if ($(this).hasClass('disable')){
			alert('Already selected');
		}else if (count%2 == 0){
			count++;
			$(this).text(o);
			$(this).addClass('disable o btn-primary')
			if (getWinner('o', indexBox, winningCombos) == true){
					alert('O wins bro');
					count = 0;
					o_win++;
					$('#o_win').text(o_win)
			}
		}else{
			count++;
			$(this).text(x);
			$(this).addClass('disable x btn-info');
			if (getWinner('x', indexBox, winningCombos) == true){
					alert('X wins')
					count = 0
					x_win++
					$('#x_win').text(x_win)

			}

		}


   });

    $("#reset").click(function () {
		resetGame()
	});
  
    
	function getWinner(character, indexBox, winningCombos){
		var winning = false;
		//repeat x = 9 times index box with the index 0 until 8
		for(var x=0;x<8;x++){
		   var a = "#"+indexBox[winningCombos[x][0]];
		   var b = "#"+indexBox[winningCombos[x][1]];
		   var c = "#"+indexBox[winningCombos[x][2]];
		   
		   if($(a).hasClass(character) && $(b).hasClass(character) && $(c).hasClass(character) && winning == false){
			 winning = true;
		   }

		}
		return winning;
		
	}
	
	function resetGame(){
		$("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
		count = 0
	
	}
	

});




/*******tic-tac-toe******/




