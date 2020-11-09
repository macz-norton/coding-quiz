var score;
var startBtn = document.getElementById("start");
var questionIndex = 0;

var questions = [
    {
        question: "What is the best color?",
        choices = ["red", "blue", "green", "purple"],
        correctAnswer = choices[3]
    
    }
]


function startQuiz(){

}

startBtn.addEventListener("click", startQuiz) {

}

function answerCorrectly(){

}

function answerIncorrectly(){

}

.addEventListener()

function setScoreTimer(){


}

function startScoreTimer(){

    setInterval();
    score--;
}

function moveToNextQuestion(){

    questionIndex++;

}

function finishQuiz(){



}
// set interval to do the timed functionality

// clearInterval to stop the timeout

// what data do we need?
// timeLeft / score (convert to score at end of game)
// questions



// Player clicks `startBtn`
//`startBtn` has a hover and active state

// when game starts, `question` and 4 `answerBtn`
// when player clicks correct answer, moves to `nextStep` to next question
// when player clicks correct answer, moves to `nextStep` and score decreases by 10

var index;
var score = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var = document.querySelector("#intro");

var questions = [
    {
        question: "what is the best day?",
        choices: ["Monday", "Wednesday",]
        correctAnswer: "Friday"
    }
]
// if correctAnswer = 
// call function to run through questions 
.this.
startBtn.addEventListener("click", function() {
    startQuiz();
}

function startQuiz() { 
    intro.textContent = " ";
    questionEl = document.createElement("question")
    })
    
}

// get question
function nextQuestion() {
	// Increase your question pointer by one.
	index++;
    // Display the current question
    nextBtn.addEventListener("click", function() {
        if (answer[i] === correctAnswer)
    })
}

// get answer

// timer

// quiz ends

// save highscore
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