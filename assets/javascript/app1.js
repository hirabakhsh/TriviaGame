$(document).ready(function() {

// Setting up Global Variables
var solution = ["A", "B", "A", "B" , "A", "B", "A", "B", "A", "B"];
var submittedAnswers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
console.log(submittedAnswers)
console.log(correctAnswers);
console.log(incorrectAnswers);
console.log(unanswered);
countDown(10);

// supporting functions



// checking if the answers are correct/incorrect/not answered
function checkingCorrectAnswers(correctAnswers) {
    for (index = 0; index < submittedAnswers.length; index++) {
        if (submittedAnswers[index] == solution[index] && submittedAnswers[index] != 0) {
            correctAnswers++;
        }
    }
    return correctAnswers;
}

function checkingIncorrectAnswers(incorrectAnswers) {
    for (index = 0; index < submittedAnswers.length; index++) {
        if (submittedAnswers[index] != solution[index] && submittedAnswers[index] != 0 ) {
            incorrectAnswers++;
        }
    }
    return incorrectAnswers;
}

function checkingUnanswered(unanswered) {
    for (index = 0; index < submittedAnswers.length; index++) {
        if (submittedAnswers[index] == 0) {
            unanswered++;
        }
    }
    return unanswered;
}

// set values of html tags

function elementVals() {
    document.getElementById("cor-ans").innerHTML = ["Correct Answers: " + correctAnswers.toString()];
    document.getElementById("incor-ans").innerHTML = ["Correct Answers: " + incorrectAnswers.toString()];
    document.getElementById("un-ans").innerHTML = ["Correct Answers: " + unanswered.toString()];
}

// reset Variables after execution

function reset() {
    submittedAnswers = [];
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
}

})

// Extracting data from Form submission to submittedAnswers

function fillingSubmittedAnswers(submittedAnswers) {
    submittedAnswers[0] = document.quiz.a1.value;
    submittedAnswers[1] = document.quiz.a2.value;
    submittedAnswers[2] = document.quiz.a3.value;
    submittedAnswers[3] = document.quiz.a4.value;
    submittedAnswers[4] = document.quiz.a5.value;
    submittedAnswers[5] = document.quiz.a6.value;
    submittedAnswers[6] = document.quiz.a7.value;
    submittedAnswers[7] = document.quiz.a8.value;
    submittedAnswers[8] = document.quiz.a9.value;
    submittedAnswers[9] = document.quiz.a10.value;
    return submittedAnswers;
}

// get values from all functions

function check() {
    fillingSubmittedAnswers();
    correctAnswers = checkingCorrectAnswers();
    incorrectAnswers = checkingIncorrectAnswers();
    unanswered = checkingUnanswered();
    console.log(correctAnswers);
    console.log(incorrectAnswers);
    console.log(unanswered);
    reset();
}

// Changing page after time is up or form submitted

function countDown(seconds) {
    var element = document.getElementById("time");
    element.innerHTML = "Time Remaining: " + seconds;
    console.log(seconds);
    
    if (seconds < 1) {
        clearTimeout(timer);
        check();
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        console.log(unanswered);
        element.innerHTML = "<h2 class='done'>All Done!</h2>";
        var nextElement = document.getElementById("questions");
        nextElement.innerHTML = "<h2 id='cor-ans'>Correct Answers: </h2>"
        nextElement.innerHTML +=  "<h2 id='incor-ans'>Incorrect Answers:</h2>"
        nextElement.innerHTML +=  "<h2 id='un-ans'>Unanswered</h2>"
    }
    
    seconds--;
    // console.log(seconds)
    var timer = setTimeout('countDown('+seconds+')',1000);
}