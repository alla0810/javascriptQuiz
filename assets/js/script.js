var timeEl = document.getElementById("timer-Count");
var quizTimer = document.getElementById("quiz-timer");
var startQuizButton = document.querySelector("#start-quiz");
var h1El = document.getElementById("h1-element");
var h2El = document.getElementById("h2-element");
var resultEl = document.getElementById("result-element");
var formEl = document.getElementById("form-initial");
var submitButton = document.querySelector("#initial-submit");
var gobackContainerEl = document.getElementById("go-back");
var inputInitialEl = document.getElementById("input-initial");

var questionContainer = document.getElementById("question-container");

var option0Button = document.getElementById("option0");
var option1Button = document.getElementById("option1");
var option2Button = document.getElementById("option2");
var option3Button = document.getElementById("option3");

var bodyEl = document.body;
var enterInitialEl = document.createElement("div");
var enterInitials = document.createElement("h2");
var inputInitial = document.createElement("form");
var submitButton = document.createElement("button");

var secondsLeft = 10;

let questionNum = 0;
let checkedOption = -1;
let scoreCount=0;
let questionCount = 0;
let selectedQuestionNum = [];

let highScore_History = [];
var player_info = {initial:"", score:0};

const quizArray = [
    {
        id: "0",
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: "4. console.log",
    },
    {
        id: "1",
        question: "Commonly used data types DO Not include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correct: "3. alerts",
    },
    {
        id: "2",
        question: "The condition in an if/else statement is enclosed with ______.",
        options: ["1. quotes", "2. curly bracket", "3. parenthesis", "4. square brackets"],
        correct: "3. parenthesis",
    },
    {
        id: "3",
        question: "Arrays in JavaScript can be used to store: ",
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: "4. all of the above",
    },
    {
        id: "4",
        question: "String values must be enclosed with _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correct: "3. quotess",
    },

];



function setTime()
{
    timeEl.textContent = "Time: " + secondsLeft;          
    var timerInterval = setInterval(function() {

        if (secondsLeft >= 0)
        {
            timeEl.textContent = "Time: " + secondsLeft;  
            secondsLeft--;              
        }
        else
        {
            timeEl.textContent = "Time: 0";  
            clearInterval(timerInterval);
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";

}

startQuizButton.addEventListener("click", function(event) {
    startQuizButton.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();
    setTime();
    
    invokeQuiz();
});

option0Button.addEventListener("click", function(event) {
    option0Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();
    checkedOption = 0;
    
    checkAnswer();
});

option1Button.addEventListener("click", function(event) {
    option1Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();    
    checkedOption = 1;

    checkAnswer();
});

option2Button.addEventListener("click", function(event) {
    option2Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();
    checkedOption = 2;    
    
    checkAnswer();
});

option3Button.addEventListener("click", function(event) {
    option3Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();
    checkedOption = 3;    
    
    checkAnswer();
});

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    submitButton.setAttribute('style', 'background-color:rgb(233, 121, 212)');

    var player_initial = inputInitialEl.textContent;
    var player_score = secondsLeft;

    player_info.initial = player_initial;
    player_info.score = player_score;

    highScore_History.push(player_info);
    highScore_History.sort((a,b) => (a.score > b.score) ? 1 : -1);  // sort by score

    display_highScore();
});

formEl.addEventListener("submit", (event) => {
    console.log("formEl.addEventListener");    

    event.preventDefault();

    submitButton.setAttribute('style', 'background-color:rgb(233, 121, 212)');

    var player_initial = inputInitialEl.textContent;
    var player_score = secondsLeft;

    console.log("player_initial = " + player_initial) ;   
    console.log("player_score = " + player_score) ;       

    player_info.initial = player_initial;
    player_info.score = player_score;

    highScore_History.push(player_info);
    highScore_History.sort((a,b) => (a.score > b.score) ? 1 : -1);  // sort by score

    display_highScore();

});


function display_highScore()
{
    console.log("display_highScore")  ;  
    h2El.innerHTML = "";
    formEl.style.visibility='hidden';    

    h1El.innerHTML = "High scores";

    var li1 = document.createElement("li");
    li1.textContent = highScore_History[0].initial + " - " + highScore_History[0].score;
    li1.setAttribute("style", "background: #444");
    h2El.appendChild(li1);

    gobackContainerEl.style.visibility = 'visible';
}


function select_question_num()
{
    questionNum = Math.floor(Math.random() * quizArray.length);
    console.log("questionNum = " + questionNum);

    if (!selectedQuestionNum.includes(questionNum))
    {
        selectedQuestionNum.push(questionNum);
        return;
    }
    else
    {
        select_question_num();
    }
    
}

function invokeQuiz()
{
    console.log("invokeQuiz")

    select_question_num();
    displayQuiz();
}


function checkAnswer()
{
    console.log("checkAnswer");    

    if (quizArray[questionNum].options[checkedOption] === quizArray[questionNum].correct)
    {
        console.log("Correct!");

        resultEl.innerText = "Correct!";
        resultEl.style.visibility = 'visible';        
    }
    else
    {
        console.log("Wrong!");
        resultEl.innerText = "Wrong!";        
        resultEl.style.visibility = 'visible';                
    }

    questionCount++;
    console.log("questionCount = " + questionCount);

    /* wait for 2s */
    if (questionCount >= quizArray.length)
    {
        setTimeout(enter_initial, 2000);
    }
    else {
        setTimeout(invokeQuiz, 2000);
    }
}

function enter_initial()
{
    console.log("enter_initial!");    

    option0Button.style.visibility = 'hidden';
    option1Button.style.visibility = 'hidden';
    option2Button.style.visibility = 'hidden';
    option3Button.style.visibility = 'hidden';
    resultEl.style.visibility = 'hidden';
    h2El.style.visibility = 'visible';    
    formEl.style.visibility='visible';    

    h1El.innerHTML = "All done!";
    h2El.innerHTML = "Your final score is " + secondsLeft + ".";

}





function displayQuiz()
{

    h1El.innerHTML = "";
    h2El.innerHTML = "";

    startQuizButton.style.visibility = 'hidden';

    option0Button.setAttribute('style', 'background-color:rgb(60, 37, 97)');
    option1Button.setAttribute('style', 'background-color:rgb(60, 37, 97)');
    option2Button.setAttribute('style', 'background-color:rgb(60, 37, 97)');
    option3Button.setAttribute('style', 'background-color:rgb(60, 37, 97)');    

    option0Button.style.visibility = 'visible';
    option1Button.style.visibility = 'visible';
    option2Button.style.visibility = 'visible';
    option3Button.style.visibility = 'visible';
    resultEl.style.visibility = 'hidden';    

    h1El.innerHTML = quizArray[questionNum].question;
    h2El.style.visibility = 'hidden';

    option0Button.innerText = quizArray[questionNum].options[0];
    option1Button.innerText = quizArray[questionNum].options[1];
    option2Button.innerText = quizArray[questionNum].options[2];
    option3Button.innerText = quizArray[questionNum].options[3];    

}


function initialize_display() {
    console.log("initialize_display");

    formEl.style.visibility='hidden';
    option0Button.style.visibility = 'hidden';
    option1Button.style.visibility = 'hidden';
    option2Button.style.visibility = 'hidden';
    option3Button.style.visibility = 'hidden';
    resultEl.style.visibility = 'hidden';
    gobackContainerEl.style.visibility = 'hidden';

    setTime();

}



initialize_display();
