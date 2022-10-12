// Declare Variables
var timerEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var titleArea = document.querySelector("#title-area");
var sectionAreaEl = document.querySelector("#section-area");
var instructionEl = document.querySelector("#instructions");
var startEl = document.querySelector("#start-button");

// store questions, answers and correct answers in an array
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [ 
            "<javascript>",
            "<sctipt>",
            "<js>",
            "<scripting>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?"
        "<p id=demo>This is a demonstration.</p>",
        
        answers: [ 
            "document.getElementById(demo).innerHTML=hello world!",
            "document.getElement(demo).innerHTML=hello world!",
            "document.getElement(demo)=hello world!",
            "document.querySelector=hello world!"
        ],
        correctAnswer: "document.getElementById(demo).innerHTML=hello world!"
    },
    {
        question: "Commonly used data types DO Not Include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ],
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        correctAnswer: "console.log"
    }
];

var timeLeft = 75;
var timeInterval= "";
var questionNo = 0;
var scoreList = [];
