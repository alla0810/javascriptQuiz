var timeEl = document.getElementById("timer-Count");
var quizTimer = document.getElementById("quiz-timer");
var startQuizButton = document.querySelector("#start-quiz");
var h1El = document.getElementById("h1-element");
var h2El = document.getElementById("h2-element");
var resultEl = document.getElementById("result-element");

var questionContainer = document.getElementById("question-container");
var questionText = document.getElementById('question-text-container');
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

    questionText.style.visibility = 'hidden';
    option0Button.style.visibility = 'hidden';
    option1Button.style.visibility = 'hidden';
    option2Button.style.visibility = 'hidden';
    option3Button.style.visibility = 'hidden';
    resultEl.style.visibility = 'hidden';

    h1El.innerHTML = "All done!";
    h2El.innerHTML = "Your final score is " + secondsLeft + ".";

    enterInitials.textContent = "Enter initials: ";


//    inputInitial.setAttribute("style", "border-color: blue");
    submitButton.setAttribute("style", "background-color: rgb(60, 37, 97)");

    enterInitialEl.appendChild(enterInitials);
    enterInitialEl.appendChild(inputInitial);
    enterInitialEl.appendChild(submitButton);
    h2El.appendChild(enterInitials);
    h2El.appendChild(inputInitial);
    h2El.appendChild(submitButton);        
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

    questionText.style.visibility = 'visible';
    option0Button.style.visibility = 'visible';
    option1Button.style.visibility = 'visible';
    option2Button.style.visibility = 'visible';
    option3Button.style.visibility = 'visible';
    resultEl.style.visibility = 'hidden';    

    questionText.innerText = quizArray[questionNum].question;
    questionText.setAttribute("style", "margin-top: 10px")

    option0Button.innerText = quizArray[questionNum].options[0];
    option1Button.innerText = quizArray[questionNum].options[1];
    option2Button.innerText = quizArray[questionNum].options[2];
    option3Button.innerText = quizArray[questionNum].options[3];    

}


function initial_display() {
    console.log("initial_display");

    questionText.style.visibility = 'hidden';
    option0Button.style.visibility = 'hidden';
    option1Button.style.visibility = 'hidden';
    option2Button.style.visibility = 'hidden';
    option3Button.style.visibility = 'hidden';
    resultEl.style.visibility = 'hidden';

    setTime();

}



initial_display();
