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
var goBackBtn = document.getElementById("goBackBtn");
var clearScoresBtn = document.getElementById("clearScoresBtn");

// Variable for timer & score
var secondsLeft = 100;
var score = 0;

// Variable for question index
var questionIndex = 0;

// Variable for questions - with answers and correct answers
var questionsArray = [
    {
        "question": "What is the best color?",
        "choices": ["1. red", "2. blue", "3. best", "4. purple"],
        "correctAnswer": "3. best"
    },
    {
        "question": "Who?",
        "choices": ["1. bob", "2. joe", "3. mary", "4. jill"],
        "correctAnswer": "2. joe"
    },
    {
        "question": "How?",
        "choices": ["1. car", "2. boat", "3. bus", "4. bike"],
        "correctAnswer": "1. car"
    }
]

var timerInterval;

function decrementTimer() {

    timerEl.textContent = "Score Timer: " + secondsLeft;

    if(secondsLeft === 0) {

        clearInterval(timerInterval);
        endQuiz();

    } else if (questionIndex === questionsArray.length) {

        clearInterval(timerInterval);
        endQuiz();

    } else 

        displayQuestions();
        secondsLeft--;

}

// Function to start the score timer counting down from 100
function startScoreTimer() {
    
    timerInterval = setInterval(decrementTimer, 1000, 1);

}

// Function to displays the `questionStatement` and `answerChoices
function displayQuestions() {

    quizIntroEl.removeAttribute("class", "display");
    quizInProgressEl.removeAttribute("class", "hide");

    quizIntroEl.setAttribute("class", "hide");
    quizInProgressEl.setAttribute("class", "display");

    // Variable for question statement
    questionTextEl.textContent = questionsArray[questionIndex].question
    answerBtns.innerHTML = " ";

    for (var i = 0; i < questionsArray[questionIndex].choices.length; i++) {

        var answerChoiceBtn = document.createElement("button");
 
        answerChoiceBtn.textContent = questionsArray[questionIndex].choices[i];
        // Registers the click event
        answerChoiceBtn.onclick =  answerStatus;
        answerBtns.appendChild(answerChoiceBtn);
        questionsArray[questionIndex].answerChoices
    }

}

// When player clicks the `quizStartBtn,` run the functions to show the `quizInProgress` start the `timerInterval`
quizStartBtn.addEventListener("click", function() {

    startScoreTimer();
    displayQuestions();
    decrementTimer();

});

function answerStatus() {

    // If user answers incorrectly
    if (this.textContent !== questionsArray[questionIndex].correctAnswer){
        // Add text content to tell user it's incorrect
        answerStatusEl.textContent = "Incorrect";
        secondsLeft-=10;
        questionIndex++;

    // If user answer correctly
    } else {
        // Add text content to tell user it's incorrect
        answerStatusEl.textContent = "Correct";
        questionIndex++;
    }

}

quizInProgressEl.addEventListener("click", answerStatus);

function endQuiz() {

    quizInProgressEl.removeAttribute("class", "display");
    quizCompleteEl.removeAttribute("class", "hide");

    quizInProgressEl.setAttribute("class", "hide");
    quizCompleteEl.setAttribute("class", "display");

    questionTextEl.textContent = " ";
    answerStatusEl.textContent = " ";
    answerBtns.remove();

    score = secondsLeft;

    finalScoreEl.textContent = "Your final score is " + score;
}

function storePlayerData() {

    var playerInitials = initialsEl.value;
    localStorage.setItem("initials", playerInitials);
    localStorage.setItem("score", score);

    scoreSubmitBtn.onclick =  showLeaderboard;


function showLeaderboard() {

    quizCompleteEl.removeAttribute("class", "display");
    leaderboardEl.removeAttribute("class", "hide");

    quizCompleteEl.setAttribute("class", "hide");
    leaderboardEl.setAttribute("class", "display");

    var playerInitials = localStorage.getItem("initials");
    playerScoresEl.appendChild(playerInitials);
}

}

scoreSubmitBtn.addEventListener("click", storePlayerData);

// push elements into an array
// set array = what's in local storage
//JSON.parse
// var highScore = [
//     {
//     initials: ,
//     score: 
//     }
// ]