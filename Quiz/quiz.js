const quizData = [
    {
        question: 'Where do you write JavaScript?',
        a: 'In the JS file',
        b: 'In the CSS file',
        c: 'In the HTML file',
        d: 'In the JSX file',
        correct: 'a'
    },
    {
        question: 'Inside which html element do we put the JavaScript?',
        a: '<script>',
        b: '<scripting>',
        c: '<js>',
        d: '<javascript',
        correct: 'a'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        a: 'The <body> section',
        b: 'Both the <body> section and the <head> section are correct',
        c: 'The <head> section',
        d: 'None of the above',
        correct: 'b'
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msg('Hello World');",
        b: "alertBox('Hello World');",
        c: "msg('Hello World');",
        d: "alert('Hello World');",
        correct: 'd'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        a: 'if i=5',
        b: 'f i==5 then',
        c: 'f i=5 then',
        d: 'if (i==5)',
        correct: 'd'
    }
];


const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const question = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');

let currentQuiz = 0;

let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

const btn = document.getElementById('submitBtn');

btn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h1>You answered correctly ${score}/${quizData.length} questions</h1>
        <button class="btn green" onclick='location.reload()'>Try again</button>`;
    }
});