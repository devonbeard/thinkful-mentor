// 1) The app must lead the user through a set of questions.
//     - The user should only see one question at a time, with new answers presented only after they have answered the current one.

// 2) Users should be able to to input their answer to each question, with radio buttons or some other appropriate interface.

// 3) When the user answers the last question, the app should show his or her overall score.

// Additional:
// 1) Let the user know where in the quiz they are at each step (i.e. “Question 3 of 5")
// 2) Let the user know their score so far
// 3) Let the user know if their previous response was correct

var score = 5;

var quizApp = {

  question: [
    'What does CSS stand for?',
    'What does HTML stand for?',
    'Who is making the Web standards?',
    'Choose the correct HTML tag for the largest heading',
    'What is the correct HTML tag for inserting a line break?'
  ],

  questionAnswers: [
    'Cascading Style Sheets',
    'Hypertext Markup Language',
    'The World Wide Web Consortium',
    '<h1>',
    '<br>'
  ],

  checkAnswer: function ( selector, answerNumber ) {
    var elementValue = $(selector).val();
    if ( elementValue ==  quizApp.questionAnswers[answerNumber] ) {
      score += 1;
    }
  },

  displayQuestionTitle: function( num ) {
    return quizApp.question[num];
  },

  scoreCalculator: function () {
    return score * 20;
  }

};



$(document).ready(function(){


  /*
    Show question titles
  */
  $('.js-question1 .question-title').text( quizApp.displayQuestionTitle(0) );
  $('.js-question2 .question-title').text( quizApp.displayQuestionTitle(1) );
  $('.js-question3 .question-title').text( quizApp.displayQuestionTitle(2) );
  $('.js-question4 .question-title').text( quizApp.displayQuestionTitle(3) );
  $('.js-question5 .question-title').text( quizApp.displayQuestionTitle(4) );


  /*
    Update Score Total
  */
  score = quizApp.scoreCalculator() + '%';
  $('.js-store').text( score );

});