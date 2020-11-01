// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var body = document.body;

var nav = document.createElement("nav");
var liHighScores = document.createElement("li");
var liTimer = document.createElement("li");
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var pSubtitle = document.createElement("p");
var btnStart = document.createElement("div");
var btnA1
var btnA2
var btnA3
var vtnQA
var initialsInput = document.createElement("input");
var btnSubmit =

var questions = [
    {
        question:
        answer1:
        answer2:
        answer3:
        answer4:
        correctAnswer:
    }
]

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        liTimer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz()
        }
    })
}

function newQuestion() {

    
}

function endQuiz() {
    h2El.textContent = "All done!"
    pSubtitle.textContent = "Your final score is " + score;
    initialsInput = 
    btnSubmit =
}