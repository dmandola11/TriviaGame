var correct = 0;
var incorrect = 0;

$(".quiz").hide();

$(".start").on("click", start);

function start() {
    $(".quiz").show();
    $(".start").hide();


    var count = 20;
    token = setInterval(function() {
        count--;

        $('#timer').html(count + " Seconds");

        if (count == 0) {
            clearInterval(token);

            answers = $('input:checked');
            console.log(answers);
            for (var i = 0; i < answers.length; i++) {
            	if(answers.value === correct){
            		correct++;
            	}
            }
        };


    }, 1000);
    console.log(correct);
    console.log(incorrect);






    document.getElementById("timer").innerHTML = count + " Seconds Left";
};
