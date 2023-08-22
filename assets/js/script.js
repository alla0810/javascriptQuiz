var timeEl = document.getElementById("timer-Count");
var quizTimer = document.getElementById("quiz-timer");
var startQuizButton = document.querySelector("#start-quiz");
var h1El = document.getElementById("h1-element");
var h2El = document.getElementById("h2-element");
var questionContainer = document.getElementById("question-container");

var secondsLeft = 10;

let questionNum = 0;
let scoreCount=0;

const quizArray = [
    {
        id: "0",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "1",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "Europe",
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "Charles Babbage",
    },
];



function setTime()
{
    timeEl.textContent = "Time: " + secondsLeft;          
    var timerInterval = setInterval(function() {
        secondsLeft--;        
        timeEl.textContent = "Time: " + secondsLeft;          

        if (secondsLeft == 0){
            timeEl.textContent = "Time: " + secondsLeft;  

            clearInterval(timerInterval);

            sendMessage();
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


function invokeQuiz()
{
    console.log("invokeQuiz")

    questionNum = Math.floor(Math.random() * quizArray.length);

    console.log("questionNum = " + questionNum);

    displayQuiz();
}

function quizCreate()
{
    console.log("quizCreate");

    quizArray.sort(()=>Math.random()-0.5);

    for (let i of quizArray)
    {
        i.options.sort(()=>Math.random()-0.5);

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>   
        `;
        quizContainer.appendChild(div);
    }
}

function checker(userOption)
{
    console.log("checker!");

    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution == quizArray[questionCount].correct)
    {
        userOption.classList.add("correct");
        scoreCount++;
    }
    else
    {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct)
            {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(secondsLeft);
    options.forEach((element) => {
        element.disabled = true;
    });

    
}



function displayQuiz()
{

    h1El.innerHTML = "";
    h2El.innerHTML = "";
    startQuizButton.remove();
    
    var questionText = document.createElement('question-text');
    questionText.innerText = quizArray[questionNum].question;
    questionContainer.appendChild(questionText);
    

    questionContainer.innerHTML += `
    <button class="option-button" onclick="checker(this)">${quizArray[questionNum].options[0]}</button><br>
     <button class="option-button" onclick="checker(this)">${quizArray[questionNum].options[1]}</button><br>
      <button class="option-button" onclick="checker(this)">${quizArray[questionNum].options[2]}</button><br>
       <button class="option-button" onclick="checker(this)">${quizArray[questionNum].options[3]}</button>
    `;
    questionContainer.setAttribute("style", "margin-top: 10px")


}




setTime();