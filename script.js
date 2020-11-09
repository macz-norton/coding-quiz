// Variables for header
var timerEl = document.getElementById("scoreTimer");

// Variables for quiz intro
var quizIntroEl = document.getElementById("quizIntro");
var quizStartBtn = document.getElementById("quizStartBtn");

// Variables for quiz in progress
var quizInProgressEl = document.getElementById("quizInProgress");
var questionTextEl = document.getElementById("questionText");
var answerBtns = document.getElementById("answers");
var answerStatusEl = document.getElementById("answerStatus");

// Variables for quiz completion
var quizCompleteEl = document.getElementById("quizComplete");
var finalScoreEl = document.getElementById("finalScore");
var initialsEl = document.getElementById("initials");
var scoreSubmitBtn = document.getElementById("scoreSubmitBtn");

// Variables for quiz leaderboard
var leaderboardEl = document.getElementById("leaderboard");
var playerScoresEl = document.getElementById("playerScores");
var goBackBtn = document.getElementById("gotBackBtn");
var clearScoresBtn = document.getElementById("clearScoresBtn");

// Variable for timer
var secondsLeft = 100;
console.log("Score timer seconds left:")
console.log(secondsLeft);

// Variable for question index
var questionIndex = 0;
console.log("Question index:");
console.log(questionIndex);

// Variable for questions - with answers and correct answers
var questionsObject = [
    {
        "question": "What is the best color?",
        "choices": ["1. red", "2. blue", "3. best", "4. purple"],
        "correctAnswer": 2
    },
    {
        "question": "What is the worst color?",
        "choices": ["1. red", "2. worst", "3. green", "4. purple"],
        "correctAnswer": 1
    },
    {
        "question": "What is the coolest color?",
        "choices": ["1. coolest", "2. blue", "3. green", "4. purple"],
        "correctAnswer": 0
    }
]

console.log("Questions Object:")
console.log(questionsObject);

// Variable for question statement
var questionStatement = questionsObject[questionIndex]["question"];
console.log("Question Statement:");
console.log(questionStatement);

// Variable for answer choices
var answerChoices = questionsObject[questionIndex]["choices"];
console.log("Answer Choices:");
console.log(answerChoices);

// Variable for correct answer
var correctAnswer = questionsObject[questionIndex]["correctAnswer"];
console.log("Correct Answer:");
console.log(correctAnswer);

// Function to hide the `quizIntroEl`
function quizIntroDisplay() {

        quizIntroEl.setAttribute("class", "hide");

}

// Function to show the `quizIntroEl`
function quizQuestionDisplay() {

        quizInProgressEl.setAttribute("class", "display");

}

// Function to display the `questionStatement`
function displayQuestionStatement() {

    // Clear `questionTextEl`
    questionTextEl.innerHTML = "";
    // Add `questionStatement to `questionTextEl`
    questionTextEl.innerHTML = questionStatement[questionIndex];

}

// Function to display the `answerChoices`
function displayAnswerChoices() {

    for (var i = 0; i < answerChoices.length; i++) {

        var answerChoiceBtn = document.createElement("button");
        answerChoiceBtn.textContent = answerChoices[i];
        answerBtns.appendChild(answerChoiceBtn);
        
    }

}

// Function to start the score timer counting down from 100
function startScoreTimer(event) {

    var timerInterval = setInterval(function(event) {
        secondsLeft--;
        timerEl.textContent = "Score Timer: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // endQuiz();
        }

    }, 1000);

}

// When player clicks the `quizStartBtn,` run the functions to:
// hide the `quizIntroEl`
quizStartBtn.addEventListener("click", quizIntroDisplay());
// show the `quizInProgress`
quizStartBtn.addEventListener("click", quizQuestionDisplay());
// display the `questionStatement`
quizStartBtn.addEventListener("click", displayQuestionStatement());
// display the 'answerChoices`
quizStartBtn.addEventListener("click", displayAnswerChoices());
// start the `timerInterval`
quizStartBtn.addEventListener("click", startScoreTimer());


function answerStatus() {

    event.target.matches("button");

    var clickButtonContent = event.target.textContent;

    // If user answers correctly
    if (clickButtonContent == answerChoices[questionIndex].correctAnswer] {
        // Add text content to tell user it's incorrect
        answerStatusEl.innerHTML = "Correct!";

    // If user answer incorrectly
    } else {
        // Add text content to tell user it's incorrect
        answerStatusEl.innerHTML = "Incorrect";
        secondsLeft--;
    }
}

function endQuiz(){

    if (!(i < questions.length - 1)) {

    } else (timer = 0) {
            
    }

    clearInterval()

}

// When player clicks an `answerBtn,` run the functions to:
// show `answerStatusEl`
quizInProgressEl.addEventListener("click", answerStatus());
// increment the `questionIndex`
questionIndex++;
// display the `questionStatement`
quizInProgressEl.addEventListener("click", displayQuestionStatement());
// display the 'answerChoices`
quizInProgressEl.addEventListener("click", displayAnswerChoices());
quizInProgressEl.addEventListener("click", endQuiz());

// function saveHighScore() {
    
// }