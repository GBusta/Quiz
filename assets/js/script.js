const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector('#timer')
const introDiv = document.querySelector('#introDiv')
const quizQuestions = document.querySelector('#quizQuestions')

var time = 5;

let questions = [
    {
    question: "When did COVID happen?",
    choices: ["2019", "2020", "2022"],
    answer: "2020"
    }
    ]

// const questions = [{question: 'What is today?', answer: 'Thursday'}, {}]

startBtn.addEventListener('click', function() {
    setTime()
    displayQuestion()
})

function setTime () {
    var countdown = setInterval(function() {
        time--;
    if (time === 0) {
        clearInterval(countdown)
    }
    timer.textContent=time
    
    }, 1000)
}

function displayQuestion() {
    introDiv.classList.remove("show")
    introDiv.classList.add('noshow')
    quizQuestions.classList.remove("noshow")
    quizQuestions.classList.add('show')
    // startBtn.classList.remove("show")
    // startBtn.classList.remove("noshow")
}