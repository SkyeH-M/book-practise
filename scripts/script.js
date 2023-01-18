/*
1) DONE- return array of letters whose buttons have been clicked 
2) when answer button is clicked move onto next question
3) DONE- restart empties the genreArray array
*/


// create variables used to rep elements in our document, used to access them in the DOM:
const restartBtn = document.getElementById("restart");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');
const questionText = document.getElementById("question-text");

/* Genres:
A- Non-Fiction
B- Horror
C- Classics
D- Modern Fiction
*/
let currentQuestion = 0;
let genreArray = [];

let questions = [
    {
        question: "Which genre do you read most frequently?",
        answers: [
            {option: "Non-Fiction", answer:A},
            {option: "Horror", answer:B},
            {option: "Classics", answer:C},
            {option: "Modern Fiction", answer:D}

        ]
    },
    {
        question: "Hello",
        answers: [
            {option: "C", answer:C},
            {option: "D", answer:D},
            {option: "A", answer:A},
            {option: "B", answer:B}

        ]
    }
]

// add event listeners to buttons to call functions when clicked:
restartBtn.addEventListener('click', restart);
previousBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);

// create a func that'll be executed when the page loads and script is executed

function startQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[0].question;
    // First button:
    A.innerHTML = questions[0].answers[0].option;
    A.onclick = () => {
        if (questions[0].answers[0].answer === 'A') {
            console.log('A'); // when A is clicked, the console displays A
           genreArray.push('A'); // when A is clicked, 'A' is added to genreArray (this adds as many 'A's as the num of times the button is clicked)
        }
        if (currentQuestion < 9) {
            next();
        }
    }
    
    // Second button:
    B.innerHTML = questions[0].answers[1].option;
    B.onclick = () => {
        if (questions[0].answers[1].answer === B) {
            console.log('B'); 
           genreArray.push('B'); 
        }
    }
    if (currentQuestion < 9) {
        next();
    }
    // Third button:
    C.innerHTML = questions[0].answers[2].option;
    C.onclick = () => {
        if (questions[0].answers[2].answer) {
            console.log('C'); 
           genreArray.push('C'); 
        }
    }
    if (currentQuestion < 9) {
        next();
    }
    // Fourth button:
    D.innerHTML = questions[0].answers[3].option;
    D.onclick = () => {
        if (questions[0].answers[3].answer) {
            console.log('D'); 
           genreArray.push('D'); 
        }
    }
    if (currentQuestion < 9) {
        next();
    }
    previousBtn.classList.add('hide');
 }
startQuiz();

// create function to reset current question index, remove hide class from elements, call startQuiz()
function restart() {
    currentQuestion = 0;
    genreArray = [];
    previousBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    A.classList.remove('hide');
    B.classList.remove('hide');
    C.classList.remove('hide');
    D.classList.remove('hide');
    startQuiz();
}

// atm options are tied to buttons so will always have to be in order ABCD. If I write A in the answer option for the 3rd option will it print A to the genreArray?

// create next() to move to next Q, currentQ will ++, hidden class will be removed from prev button
// based on option the user selects, the genreArray will be added to

function next() {
    currentQuestion++;
    if (currentQuestion >= 9) {
        nextBtn.classList.add('hide');
        previousBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[0].question;
    A.innerHTML = questions[0].answers[0].option;
    A.onclick = () => {
        if (questions[0].answers[0].answer) {
            console.log('A'); 
           genreArray.push('A'); 
        }
    }
    if (currentQuestion < 9) {
        next();
    }
    B.innerHTML = questions[0].answers[1].option;
    B.onclick = () => {
        if (questions[0].answers[1].answer) {
            console.log('B'); 
           genreArray.push('B'); 
        }
    }
    if (currentQuestion < 9) {
        next();
    }
    C.innerHTML = questions[0].answers[2].option;
    C.onclick = () => {
        if (questions[0].answers[2].answer) {
            console.log('C'); 
           genreArray.push('C'); 
        }
    }
    if (currentQuestion < 9) {
        next();
    }
    D.innerHTML = questions[0].answers[3].option;
    D.onclick = () => {
        if (questions[0].answers[3].answer) {
            console.log('D'); 
           genreArray.push('D'); 
        }
    }
    if (currentQuestion < 9) {
        next();
    }
    previousBtn.classList.remove('hide');
}

// create previous() jump to prev Q, currentQuestion will be --, hidden class removed from next button
function prev() {
    currentQuestion--;
    if (currentQuestion <= 0) {
        previousBtn.classList.add('hide');
        nextBtn.classList.remove('hide')
    }
    questionText.innerHTML = questions[currentQuestion].question;
    // button 1
    A.innerHTML = questions[currentQuestion].answers[0].option;
    A.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            console.log('A'); 
            genreArray.push('A'); 
         }
     }
     if (currentQuestion < 9) {
         next();
     }
     // button 2
     B.innerHTML = questions[currentQuestion].answers[1].option;
     B.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            console.log('B'); 
            genreArray.push('B'); 
         }
     }
     if (currentQuestion < 9) {
         next();
     }
     C.innerHTML = questions[currentQuestion].answers[2].option;
     C.onclick = () => {
        if (question[currentQuestion].answers[2].answer) {
            console.log('C'); 
            genreArray.push('C'); 
         }
     }
     if (currentQuestion < 9) {
         next();
     }
     D.innerHTML = questions[currentQuestion].answers[3].option;
     D.onclick = () => {
        if (question[currentQuestion].answers[3].answer) {
            console.log('D'); 
            genreArray.push('D'); 
         }
     }
     if (currentQuestion < 9) {
         next();
     }
     nextBtn.classList.remove('hide');
        }

