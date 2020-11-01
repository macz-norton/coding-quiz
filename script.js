// Player clicks `startBtn`
//`startBtn` has a hover and active state

// when game starts, `question` and 4 `answerBtn`
// when player clicks correct answer, moves to `nextStep` to next question
// when player clicks correct answer, moves to `nextStep` and score decreases by 10

var questions = [
    {
        question: "what is the best day?";
        answer1: "Monday",
        answer2: "Wednesday",
        answer3: "Friday",
        answer4: "Saturday",
        correctAnswer: "Friday"
    }
]

var index;
function startQuiz() { 
	index = 0;
    startBtn.addEventListener("click", function() {
        if 
    })
    
}
function nextQuestion() {
	// Increase your question pointer by one.
	index++;
    // Display the current question
    nextBtn.addEventListener("click", function() {
        if (answer[i] === correctAnswer)
    })
}

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

var mainEl = document.getElementById("main");  
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
var secondsLeft = 75;

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

function endQuiz() {
    h2El.textContent = "All done!"
    var pSubtitle.textContent = "Your final score is " + score;
    var initialsInput = document.createElement("input");
    var btnSubmit = document.createElement("button");

    mainEl.appendChild(initialsInput);
    mainEl.appendChild(btnSubmit);
}