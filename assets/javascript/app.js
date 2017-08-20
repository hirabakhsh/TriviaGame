// Starting the form

$(document).ready(function() {
  
// Variables

  var solution = ["A", "B", "C"];
  var submittedAnswers = [];
  console.log(submittedAnswers)
  var correctAnswers = [];
  var incorrectAnswers = [];
  var unanswered = [];

  $('.simple-quiz').simpleQuiz();
});


// Supporting Functions 

// checks 
$.fn.every = function(callback) {
  var numElements = this.length;
  console.log(this)
  console.log(numElements);
  return this.filter(callback).length == numElements;
};

// grades quiz
$.fn.simpleQuiz = function(options) {
  console.log(this)
  if(!this.length) {
    return
  }

  console.log(this)
  this.each(function() {
    var form = $(this);
    var submitButton = form.find(':submit');
    console.log(submitButton)
    var questions = form.find('.question');
    console.log(questions)
    var choices = form.find(':radio');
    console.log(choices)

    var init = function() {
      choices.on('change', answerChanged);
      form.on('submit', answersSubmitted);

      answerChanged();
    };

    var answersSubmitted = function(event) {
      if(!hasPassed()) {
        event.preventDefault();
        alert('Please try again.');
      }
    };

    var score = function() {
      return form.find(':checked[data-correct]').length;
    };

    // var hasPassed = function() {
    //   return score() == questions.length;
    // };

    var hasCheckedElement = function() {
      return $(this).has(':checked').length;
    };

    var allQuestionsAnswered = function() {
      return questions.every(hasCheckedElement);
    };

    var answerChanged = function() {
      if(allQuestionsAnswered()) {
        submitButton.removeAttr('disabled');
      } else {
        submitButton.attr('disabled', 'disabled');
      }
    };

    init();
  });

}
