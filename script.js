// Display-specific variable
var hiddenEl = document.querySelector(".hide")
var displayedEl = document.querySelector(".display")
var display = "show";

// Variables for header
var timerEl = document.getElementById("scoreTimer");

// Variables for quiz intro
var quizIntroEl = document.getElementById("quizIntro");
var quizStartBtn = document.getElementById("quizStartBtn");

// Variables for quiz in progress
var quizInProgressEl = document.getElementById("quizInProgress");
var questionTextEl = document.getElementById("questionText");
var answer1Btn = document.getElementById("answer1");
var answer2Btn = document.getElementById("answer2");
var answer3Btn = document.getElementById("answer3");
var answer4Btn = document.getElementById("answer4");
var answerStatusEl = document.getElementById("answerStatus");

// Variables for quiz completion
var quizCompleteEl = dopcument.getElementById("quizComplete");
var finalScoreEl = document.getElementById("finalScore");
var initialsEl = document.getElementById("initials");
var scoreSubmitBtn = document.getElementById("scoreSubmitBtn");

// Variables for quiz leaderboard
var leaderboardEl = document.getElementById("leaderboard");
var playerScoresEl = document.getElementById("playerScores");
var goBackBtn = document.getElementById("gotBackBtn");
var clearScoresBtn = document.getElementById("clearScoresBtn");

// Variables for timer and question index
var secondsLeft = 100;
var questionIndex = 0;

//Variables for questions with answers and correct answers
var questions = [
    {
        question: "What is the best color?",
        choices: ["red", "blue", "best", "purple"],
        correctAnswer: choices[2]
    },
    {
        question: "What is the worst color?",
        choices: ["red", "worst", "green", "purple"],
        correctAnswer: choices[1]
    },
    {
        question: "What is the coolest color?",
        choices: ["coolest", "blue", "green", "purple"],
        correctAnswer: choices[0]
    }
]

// Function displays any `displayedEl`
function display() {

    displayedEl.style.display = "block"

}
// Function hides any `hiddenEl`
function hide() {

    hiddenEl.style.display = "none";

}

// Function to hide the `quizIntroEl`
function quizIntroDisplay() {

    if (mode === "show"){

        mode === "hide";
        quizIntroEl.setAttribute("class", "hide");

    } else {

        mode === "show";
        quizIntroEl.setAttribute("class", "show");

    }

}

// Function to show the `quizIntroEl`
function quizQuestionDisplay() {

    if (mode === "hide"){

        mode === "show";
        quizInProgressEl.setAttribute("class", "show");

    } else {

        mode === "hide";
        quizInProgressEl.setAttribute("class", "hide");

    }

}

// Function to start the score timer counting down from 100
function startScoreTimer() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Score Timer: " + secondsLeft;

        if(secondsLEft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    }, 1000);

}

display();
hiddenEl();

// When player clicks the `quizStartBtn,` run three functions to:
// hide the `quizIntroEl`
quizStartBtn.addEventListener("click", quizIntroDisplay());
// show the `quizInProgress`
quizStartBtn.addEventListener("click", quizQuestionsDisplay());
// start the `timerInterval`
quizStartBtn.addEventListener("click", startScoreTimer());


// function incorrectAnswer(){
//     secondsLeft--5;
// }

// function answerStatus(){
//     // If user answers correctly
//     if (correctAnswer === choices[i]) {
//         // Add text content to tell user it's incorrect
//         answerStatusEl.innerHTML == "Correct!";

//     // If user answer incorrectly
//     } else {
//         // Add text content to tell user it's incorrect
//         answerStatusEl.innerHTML == "Incorrect";
//         incorrectAnswer();
//     }
// }








// function nextQuestion(){

//     // change to next Question

// }

// function endQuiz(){

//     if (!(i < questions.length)) {

//     }
//     else (timer=0) {
            
//     }
//     else{

//     }

//     clearInterval()

//     h2El.textContent = "All done!"
//     var pSubtitle.textContent = "Your final score is " + score;

// }

// function saveHighScore() {


// }


// function setTimer() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         liTimer.textContent = "Time: " + secondsLeft;

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             endQuiz()
//         }
//     }, 1000);
// }

// function newQuestion() {


// }

// startBtn.addEventListener("click", startQuiz){}