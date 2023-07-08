const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let option = document.querySelectorAll(".answer");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function deselectAnswers() {
    for (var i = 0; i < option.length; i++) {
        option[i].checked = false;
    }
}

function getSelected() {
    let answer;
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            answer = option[i].id;
            break;
        }
    }
    return answer;
}

function loadQuiz() {
    deselectAnswers();
    let currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

loadQuiz()

document.getElementById("submit").addEventListener("click", function () {
    let answer = getSelected();
    if (answer) {
        if (answer == quizData[currentQuiz].correct) score++;
        currentQuiz++
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
                      <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                   <button onclick="history.go(0)">Play Again</button>
                       ` // location.reload() won't work in CodePen for security reasons;
        }
    }
});





