
var count = 20

var counter = setInterval(timer, 1000);

function timer(){
	count = count -1;
	if(count <= -1){
		
		clearInterval(counter);

		var answers = $('input:checked');
		console.log(answers);
		return;
	}

	document.getElementById("timer").innerHTML= count + " Seconds Left";
}

timer();

