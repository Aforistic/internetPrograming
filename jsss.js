
const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const evaluate = document.querySelector(".evaluate");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const result = document.querySelector(".result");

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 20;

const quizData = [
    {
        question: "What is the full meaning of the acronym HTML?",
        options: [
            "Hyper-Text Transfer Protocol ",
            "Hyper-Text Pre-processor",
            "Hyper-text Markup Language",
            "Hyper-text Transfer Protocol-Secured"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the default port number of HTTPS?",
        options: [
            "443",
            "21",
            "80",
            "3306"
        ],
        correctAnswer: 0
    },
    // Add 17 more questions here
    {
        question: "What is the Default port number of MySQL?",
        options: [
            "8888",
            "22",
            "21",
            "3306"
        ],
        correctAnswer: 3
    },
    {
        question: "Which programming language is used to style HTML documents?",
        options: [
            "JavaScript",
            "CSS",
            "Python",
            "C++"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct HTML tag for creating a hyperlink?",
        options: [
            "<a>",
            "<b>",
            "<i>",
            "<p>"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the CSS box model?",
        options: [
            "To define the layout of a webpage",
            "To style the text on a webpage",
            "To create animations on a webpage",
            "To add interactivity to a webpage"
        ],
        correctAnswer: 0
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        options: [
            "// This is a comment",
            "",
            "<comment> This is a comment </comment>",
            "/* This is a comment */"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the DOM in JavaScript?",
        options: [
            "To manipulate the HTML structure of a webpage",
            "To store data in a webpage",
            "To create animations on a webpage",
            "To handle network requests"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the correct syntax for an if statement in JavaScript?",
        options: [
            "if (condition) { code }",
            "if condition { code }",
            "if: condition { code }",
            "if: (condition) { code }"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of a loop in JavaScript?",
        options: [
            "To execute a block of code repeatedly",
            "To declare a variable",
            "To define a function",
            "To create an object"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the correct way to define a function in JavaScript?",
        options: [
            "function myFunction() { code }",
            "myFunction() { code }",
            "function: myFunction() { code }",
            "myFunction: function() { code }"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: [
            "To refer to the current object",
            "To declare a variable",
            "To define a function",
            "To create an array"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        options: [
            "`==` checks for equality, `===` checks for strict equality",
            "`==` checks for strict equality, `===` checks for equality",
            "Both operators check for the same type of equality",
            "There is no difference between the two operators"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `try...catch` block in JavaScript?",
        options: [
            "To handle errors and exceptions",
            "To create a loop",
            "To define a function",
            "To create an object"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `async/await` syntax in JavaScript?",
        options: [
            "To handle asynchronous operations in a synchronous way",
            "To create synchronous operations in an asynchronous way",
            "To define a function",
            "To create an object"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `fetch` API in JavaScript?",
        options: [
            "To make network requests to servers",
            "To manipulate the DOM",
            "To store data locally",
            "To create animations"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `JSON.parse()` method in JavaScript?",
        options: [
            "To parse JSON data",
            "To stringify JSON data",
            "To create a JSON object",
            "To send a JSON request"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `localStorage` API in JavaScript?",
        options: [
            "To store data locally on the user's device",
            "To store data on a server",
            "To share data between different web pages",
            "To create cookies"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `sessionStorage` API in JavaScript?",
        options: [
            "To store data that is lost when the browser is closed",
            "To store data that persists across browser sessions",
            "To share data between different web pages",
            "To create cookies"
        ],
        correctAnswer: 0
    }
    // ...
];

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    question.textContent = currentQuestion.question;

    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
}

function evaluateAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption) {
        const selectedIndex = Array.from(options).indexOf(selectedOption);
        if (selectedIndex === quizData[currentQuestionIndex].correctAnswer) {
            score++;
            result.textContent = "Correct!";
        } else {
            result.textContent = "Incorrect!";
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            displayQuestion();
        } else {
            // Calculate the percentage score
            const percentageScore = (score / totalQuestions) * 100;
            result.textContent = `Quiz Complete! Your Score: ${score}/${totalQuestions} (${percentageScore.toFixed(2)}%)`;
            evaluate.disabled = true;
            next.disabled = true;
            previous.disabled = true;
        }
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Event listeners
options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

evaluate.addEventListener("click", evaluateAnswer);
next.addEventListener("click", displayQuestion);
previous.addEventListener("click", previousQuestion);

displayQuestion();