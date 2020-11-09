var timerEl = document.querySelector("#timer");
var startBtnEl = document.getElementById("start");
var answerStatusEl = document.getElementById("answerStatus");
var introEl = document.querySelector("#intro");

var secondsLeft = 100;
var questionIndex = 0;

var questions = [
    {
        question: "What is the best color?",
        choices = ["red", "blue", "best", "purple"],
        correctAnswer = choices[2]
    }
    {
        question: "What is the worst color?",
        choices = ["red", "worst", "green", "purple"],
        correctAnswer = choices[1]
    }
    {
        question: "What is the coolest color?",
        choices = ["coolest", "blue", "green", "purple"],
        correctAnswer = choices[0]
    }
]

function startQuiz(){

    introEl.textContent = "";

}


function incorrectAnswer(){
    secondsLeft--5;
}

function answerStatus(){
    // If user answers correctly
    if (correctAnswer === choices[i]) {
        // Add text content to tell user it's incorrect
        answerStatusEl.innerHTML == "Correct!";

    // If user answer incorrectly
    } else {
        // Add text content to tell user it's incorrect
        answerStatusEl.innerHTML == "Incorrect";
        incorrectAnswer();
    }
}


.addEventListener()



function startScoreTimer(){

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Score Timer: " + secondsLeft;

        if(secondsLEft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    }, 1000);
}

function nextQuestion(){

    // change to next Question

}

function endQuiz(){

    if (!(i < questions.length)) {

    }
    else (timer=0) {
            
    }
    else{

    }

    clearInterval()

    h2El.textContent = "All done!"
    var pSubtitle.textContent = "Your final score is " + score;

}

function saveHighScore() {


}


function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        liTimer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz()
        }
    }, 1000);
}

function newQuestion() {


}

startBtn.addEventListener("click", startQuiz){}