let quizQuestions = [

    {
        question: "What is the capital of India?",

        options: [
            "Mumbai",
            "Delhi",
            "Kolkata",
            "Chennai"
        ],

        answer: "Delhi"
    },

    {
        question: "2 + 5 = ?",

        options: [
            "6",
            "7",
            "8",
            "9"
        ],

        answer: "7"
    },

    {
        question: "HTML stands for?",

        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Machine Language",
            "High Text Markup Language"
        ],

        answer: "Hyper Text Markup Language"
    },

    {
        question: "CSS is used for?",

        options: [
            "Programming",
            "Styling",
            "Database",
            "Network"
        ],

        answer: "Styling"
    },

    {
        question: "JavaScript is used to make websites?",

        options: [
            "Static",
            "Dynamic",
            "Printed",
            "Offline"
        ],

        answer: "Dynamic"
    }

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

// function declaration
function loadQuestion() {

     answerButtons.innerHTML = "";

    let q = quizQuestions[currentQuestion];

    question.innerText = q.question;

    for (let i = 0; i < q.options.length; i++) {

        let button = document.createElement("button");

        button.innerText = q.options[i];

        button.classList.add("btn");

        // anonymous +callbackfunction

        button.addEventListener("click", function () {
            checkAnswer(button, q.answer);
        });

        answerButtons.appendChild(button);
    }

}

// parameter function
function checkAnswer(button, correctAnswer) {

    let buttons = answerButtons.children;

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].disabled = true;

        if (buttons[i].innerText === correctAnswer) {
            buttons[i].classList.add("correct");
        }
    }

    if (button.innerText === correctAnswer) {

        score++;

    } else {

        button.classList.add("wrong");

    }

    nextBtn.style.display = "block";
}
nextBtn.onclick = function () {

    currentQuestion++;

    nextBtn.style.display = "none";

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

         showScore(); 
        // function declaration

    }

}

function showScore() {

    question.innerHTML = "🎉 Quiz Finished!<br><br>Your Score : " + score + " / " + quizQuestions.length;

    answerButtons.innerHTML = "";

    restartBtn.style.display = "block";

}
// anonymous function
restartBtn.onclick = function () {

    currentQuestion = 0;

    score = 0;

    restartBtn.style.display = "none";

    loadQuestion();

}

 loadQuestion();
