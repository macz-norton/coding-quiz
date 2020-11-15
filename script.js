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

console.log("Questions Object:")
console.log(questionsObject);

// Function to displays the `questionStatement` and `answerChoices
function displayQuestions() {

    quizIntroEl.removeAttribute("class", "display");
    quizInProgressEl.removeAttribute("class", "hide");

    quizIntroEl.setAttribute("class", "hide");
    quizInProgressEl.setAttribute("class", "display");

    // Clear `questionTextEl`
    // questionTextEl.innerHTML = "";
    // Add `questionStatement to `questionTextEl`
    // questionTextEl.textContent = questionsObject[questionIndex];

    // Variable for question statement
    questionTextEl.textContent = questionsObject[questionIndex].question
    answerBtns.innerHTML = " ";

    for (var i = 0; i < questionsObject[questionIndex].choices.length; i++) {

        var answerChoiceBtn = document.createElement("button");
        // console.log(questionsObject[questionIndex]);
        // console.log(answerChoices);
 
        answerChoiceBtn.textContent = questionsObject[questionIndex].choices[i];
        // Registers the click event
        answerChoiceBtn.onclick =  answerStatus;
        answerBtns.appendChild(answerChoiceBtn);
        // 
        questionsObject[questionIndex].answerChoices
    }

}

// Function to start the score timer counting down from 100
function startScoreTimer() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Score Timer: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // endQuiz();
        }

    }, 1000);

}

// When player clicks the `quizStartBtn,` run the functions to:
// show the `quizInProgress`
// quizStartBtn.addEventListener("click", displayQuestions;
// start the `timerInterval`
quizStartBtn.addEventListener("click", function() {
    displayQuestions();
    startScoreTimer();
});



function answerStatus() {

    console.log(this.textContent);
    console.log(questionsObject[questionIndex].correctAnswer);
    // If user answers correctly
    if (this.textContent !== questionsObject[questionIndex].correctAnswer){
        // Add text content to tell user it's incorrect
        answerStatusEl.textContent = "Incorrect";
        secondsLeft-=10;

    // If user answer incorrectly
    } else {
        // Add text content to tell user it's incorrect
        answerStatusEl.textContent = "Correct";
        
    }

    // increment the `questionIndex`
    questionIndex++;
    quizInProgressEl.testContent = "";


    if (questionIndex === questionsObject.length){

        endQuiz();

    } else {

        displayQuestions();

    }
}

quizInProgressEl.addEventListener("click", answerStatus);

// function endQuiz(){

//     if (!(i < questions.length - 1)) {

//     } else (timer = 0) {
            
//     }

//     clearInterval()

// }

// // When player clicks an `answerBtn,` run the functions to:
// // show `answerStatusEl`

// // increment the `questionIndex`
// questionIndex++;
// // display the `questionStatement`
// quizInProgressEl.addEventListener("click", displayQuestionStatement());
// // display the 'answerChoices`
// quizInProgressEl.addEventListener("click", displayAnswerChoices());
// quizInProgressEl.addEventListener("click", endQuiz());

// // function saveHighScore() {
    
// // }

// push elements into an array
// set array = what's in local storage
//JSON.parse
var highScore = [
    {
    initials: ,
    score: 
    }
]




