var correct = 0;
var incorrect = 0;

$(".quiz").hide();
$(".results").hide();

$(".start").on("click", start);

function start() {
    $(".quiz").show();
    $(".start").hide();


    var count = 90;
    token = setInterval(function() {
        count--;

        $('#timer').html(count + " Seconds");

        if (count == 0) {
            clearInterval(token);

            answers = $('input:checked');
            console.log(answers);

            for (var i = 0; i < answers.length; i++) {
                if (answers[i].value === "correct") {
                    correct++;

                } else if (answers[i].value === "incorrect") {
                    incorrect++;

                }
            }

            console.log("correct", correct);
            console.log("incorrect", incorrect);
            $("#correct").html("Right Answers: " + correct);
            $("#incorrect").html("Wrong Answers: " + incorrect);

            function finishGame() {
                $('.quiz').hide();
                $('.results').show();
            };
            finishGame();


        };


    }, 1000);

    document.getElementById("timer").innerHTML = count + " Seconds Left";
};
