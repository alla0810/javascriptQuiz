var DynamicDisplayEl = document.getElementById("Dynamic-Display");

var timeEl = document.getElementById("timer-Count");
var quizTimer = document.getElementById("quiz-timer");
var startQuizButton = document.getElementById("start-quiz");
var h1El = document.getElementById("h1-element");
var h2El = document.getElementById("h2-element");
var resultEl = document.getElementById("result-element");
var formEl = document.getElementById("form-initial");
var submitButton = document.querySelector("#initial-submit");
var gobackContainerEl = document.getElementById("go-back");
var inputInitialEl = document.getElementById("input-initial");
var gobackButtonEl = document.getElementById("button-goback");
var clearHighscoreButtonEl = document.getElementById("clear-highscore");

var questionContainer = document.getElementById("question-container");

var secondsLeft = 60;

let questionNum = 0;
let checkedOption = -1;
let playCount=0;
let questionCount = 0;
let selectedQuestionNum = [];

let highScore_History = [];
var userInfoArray = [];

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



/*
option0Button.addEventListener("click", function(event) {
    option0Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();
    checkedOption = 0;
    
    checkAnswer();
});
*/
/*
option1Button.addEventListener("click", function(event) {
    option1Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();    
    checkedOption = 1;

    checkAnswer();
});
*/
/*
option2Button.addEventListener("click", function(event) {
    option2Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();
    checkedOption = 2;    
    
    checkAnswer();
});
*/
/*
option3Button.addEventListener("click", function(event) {
    option3Button.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();
    checkedOption = 3;    
    
    checkAnswer();
});
*/
/*
gobackButtonEl.addEventListener("click", function(event) {
    gobackButtonEl.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();

    initialize_display();
});
*/

/*
clearHighscoreButtonEl.addEventListener("click", function(event) {
    clearHighscoreButtonEl.setAttribute('style', 'background-color:rgb(233, 121, 212)');
    
    event.preventDefault();

    highScore_History = [];
    display_highScore();
});
*/

/*
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
*/

/*
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
*/

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

    var barEl = document.createElement("bottom-result-display");
    barEl.classList.add('bottom-result-display');    
    barEl.innerText = "_______________________________________";

    var resultEl = document.createElement("bottom-result-display");
    resultEl.classList.add('bottom-result-display');        

    if (quizArray[questionNum].options[checkedOption] === quizArray[questionNum].correct)
    {
        console.log("Correct!");

        resultEl.innerText = "Correct!";
    }
    else
    {
        console.log("Wrong!");
        resultEl.innerText = "Wrong!";        
    }
    DynamicDisplayEl.appendChild(barEl);
    DynamicDisplayEl.appendChild(resultEl);

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



/*
<form id="form-initial">
<lable for="name" class="h2">Enter initials: </lable>
<input type="text" id="input-initial" name="name" />
<button type="submit" id="initial-submit">Submit</button>
</form>
*/

function enter_initial()
{
    console.log("enter_initial!");    

    DynamicDisplayEl.innerHTML = "";
    DynamicDisplayEl.classList.remove('DynamicDisplay_class');
    DynamicDisplayEl.classList.add('Quiz_container');

    var List1El = document.createElement("Quiz_question_class");
    List1El.classList.add('Quiz_question_class');
    List1El.textContent = "All done!";
    DynamicDisplayEl.appendChild(List1El);    
    DynamicDisplayEl.innerHTML += "<br>";

    var List2El = document.createElement("Quiz_question_class");
    List2El.setAttribute('style', 'font-size: 1.5em; font-weight: 300');
    List2El.textContent = "Your final score is " + secondsLeft + ".";
    DynamicDisplayEl.appendChild(List2El);
    DynamicDisplayEl.innerHTML += "<br>";    

    var formEl = document.createElement("form");    
    formEl.setAttribute("method", "post");
    formEl.setAttribute("id", "initial-form");
    var navEl = document.createElement("nav");
    var ulEl = document.createElement("ul");
    var enterInitialTextEl = document.createElement("Quiz_question_class");
    enterInitialTextEl.setAttribute('style', 'font-size: 1.5em; font-weight: 300');
    enterInitialTextEl.textContent = "Enter initials:";
   
    var inputInitialEl = document.createElement("input");
    inputInitialEl.setAttribute("type", "text");
//    inputInitialEl.setAttribute("style", "width: 55%");
    inputInitialEl.setAttribute("placeholder", "JaneDoe");
    inputInitialEl.setAttribute("id", "InputInitialId");

    var submitButtonEl = document.createElement("button");
    submitButtonEl.classList.add('button_class');
    submitButtonEl.innerText = "Submit";
    submitButtonEl.addEventListener("click", function(event) {
        submitButtonEl.setAttribute('style', 'background-color:rgb(233, 121, 212)');
        event.preventDefault();

        var element = event.target;
        var userInputInitial = document.getElementById("InputInitialId");
        userInputInitial.setAttribute("style", "border: 3px solid rgb(4, 92, 122)");

        console.log("element = " + element);        
        console.log("userInputInitial = " + userInputInitial.value);
        console.log("score = " + secondsLeft);

        var userInfo = {
            initial: userInputInitial.value,
            score: secondsLeft,
        }
        userInfoArray.push(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfoArray));;

        playCount++;
        localStorage.setItem("playCount", playCount);

        renderUserInfo();
    });

    ulEl.appendChild(enterInitialTextEl);
    ulEl.appendChild(inputInitialEl);
    ulEl.appendChild(submitButtonEl);    
    navEl.appendChild(ulEl);
    formEl.appendChild(navEl);
    DynamicDisplayEl.appendChild(formEl);

}

function renderUserInfo()
{
    console.log("renderUserInfo");

    var count = JSON.parse(localStorage.getItem("playCount"));
    var storedUsrInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("count: ", count);    
    console.log("storedUsrInfo: ", storedUsrInfo);        

    for (var i=0; i<count; i++)
    {
        console.log("initial[" + i + "]: ", storedUsrInfo[i].initial);
        console.log("score[" + i + "]: ", storedUsrInfo[i].score);
    }

    storedUsrInfo.sort((a,b) => b.score - a.score);      //descending order

    DynamicDisplayEl.innerHTML = "";
    DynamicDisplayEl.classList.remove('DynamicDisplay_class');
    DynamicDisplayEl.classList.add('Quiz_container');
    var List1El = document.createElement("Quiz_question_class");

    List1El.classList.add('Quiz_question_class');
    List1El.textContent = "High scores";
    DynamicDisplayEl.appendChild(List1El);    
    DynamicDisplayEl.innerHTML += "<br>";

    for (var i=0; i<count; i++)
    {
        console.log("initial[" + i + "]: ", storedUsrInfo[i].initial);
        console.log("score[" + i + "]: ", storedUsrInfo[i].score);


        var List2El = document.createElement("Quiz_question_class");
        List2El.setAttribute('style', 'width: 700px; font-size: 1.5em; font-weight: 300; background: rgb(203, 184, 235); padding: 8px');        
//        List2El.textContent = num.toString(i) + ". " + storedUsrInfo[i].initial + " - " + num.toString(storedUsrInfo[i].score);
        List2El.textContent = (i+1).toString() + ". " + storedUsrInfo[i].initial + " - " + storedUsrInfo[i].score.toString();        

        DynamicDisplayEl.appendChild(List2El);

        console.log("initial[" + i + "]: ", storedUsrInfo[i].initial);
        console.log("score[" + i + "]: ", storedUsrInfo[i].score);

    }
    DynamicDisplayEl.innerHTML += "<br>";    

    var navEl = document.createElement("nav");
    var ulEl = document.createElement("ul");
    ulEl.setAttribute('style', 'width: 500px');      

    var gobackButtonEl = document.createElement("button");
    gobackButtonEl.classList.add('button_class');
    gobackButtonEl.innerText = "Go back";
    gobackButtonEl.addEventListener("click", function(event) {
        gobackButtonEl.setAttribute('style', 'background-color:rgb(233, 121, 212)');
        event.preventDefault();

        initialize_display();
    });

    var clearHighScoreButtonEl = document.createElement("button");
    clearHighScoreButtonEl.classList.add('button_class');
    clearHighScoreButtonEl.setAttribute('style', 'width: 280px');    
    clearHighScoreButtonEl.innerText = "Cear high scores";
    clearHighScoreButtonEl.addEventListener("click", function(event) {
        clearHighScoreButtonEl.setAttribute('style', 'background-color:rgb(233, 121, 212)');
        event.preventDefault();

        clear_highscore();
    });

    ulEl.appendChild(gobackButtonEl);
    ulEl.appendChild(clearHighScoreButtonEl);
    navEl.appendChild(ulEl);
    DynamicDisplayEl.appendChild(navEl);

    console.log("end of renderUserInfo");    
}

function clear_highscore()
{
    userInfoArray = [];
    playCount = 0;
    selectedQuestionNum = [];

    localStorage.setItem("userInfo", JSON.stringify(userInfoArray));;
    localStorage.setItem("playCount", playCount);

    renderUserInfo();
}


function displayQuiz()
{
    console.log("displayQuiz!");        

    DynamicDisplayEl.innerHTML = "";
    DynamicDisplayEl.classList.remove('DynamicDisplay_class');
    DynamicDisplayEl.classList.add('Quiz_container');

    var QuizQuestionEl = document.createElement("Quiz_question_class");
    QuizQuestionEl.classList.add('Quiz_question_class');
    QuizQuestionEl.textContent = quizArray[questionNum].question;
    DynamicDisplayEl.appendChild(QuizQuestionEl);
    DynamicDisplayEl.innerHTML += "<br>";

    var optionButton = [];

    for (let i=0; i<4; i++)
    {
        optionButton[i] = document.createElement("button");

        optionButton[i].classList.add('option-button');
        optionButton[i].id = "option" + i;
        optionButton[i].innerText = quizArray[questionNum].options[i];

        optionButton[i].addEventListener("click", function(event) {
            optionButton[i].setAttribute('style', 'background-color:rgb(233, 121, 212)');
        
            event.preventDefault();
            checkedOption = i;
    
            checkAnswer();
        });

        DynamicDisplayEl.appendChild(optionButton[i]);
    }

}


function initialize_display() {
    console.log("initialize_display");

    secondsLeft = 60;
    DynamicDisplayEl.innerHTML = "";    
    DynamicDisplayEl.classList.add('DynamicDisplay_class');

    var h1List = document.createElement("h1");
    h1List.textContent = "Coding Quiz Challenge";
    DynamicDisplayEl.appendChild(h1List);    

    var h2List1 = document.createElement("h2");
    var h2List2 = document.createElement("h2");
    h2List1.textContent = "Try to answer the following code-related questions within the time limit.";
    h2List2.textContent = "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    DynamicDisplayEl.appendChild(h2List1);
    DynamicDisplayEl.appendChild(h2List2);

    DynamicDisplayEl.innerHTML += "<br>";

    startQuizButton = document.createElement("button");
    startQuizButton.classList.add('button_class');
    startQuizButton.id = "start-quiz";
    startQuizButton.innerText = "Start Quiz";
    startQuizButton.addEventListener("click", function(event) {
        startQuizButton.setAttribute('style', 'background-color:rgb(233, 121, 212)');
        
        event.preventDefault();
        setTime();
        
        invokeQuiz();
    });

    DynamicDisplayEl.appendChild(startQuizButton);

    setTime();
}


enter_initial();
/*
initialize_display();
*/
