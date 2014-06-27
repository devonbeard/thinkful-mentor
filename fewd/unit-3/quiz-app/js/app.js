// 1) The app must lead the user through a set of questions.
//     - The user should only see one question at a time, with new answers presented only after they have answered the current one.

// 2) Users should be able to to input their answer to each question, with radio buttons or some other appropriate interface.

// 3) When the user answers the last question, the app should show his or her overall score.

// Additional:
// 1) Let the user know where in the quiz they are at each step (i.e. “Question 3 of 5")
// 2) Let the user know their score so far
// 3) Let the user know if their previous response was correct

var quizApp = {

  questions: [
    'What does CSS stand for?',
    'What does HTML stand for?',
    'What does CSS stand for?',
    'What does CSS stand for?'
  ],

  questionAnswers: [
    'Cascading Style Sheets',
    'Hypertext Markup Language',
    'Cascading Style Sheets',
    'Cascading Style Sheets'
  ],

  scoreCalculator: function() {
    return 'Hello world';
  }

};

console.log(quizApp.questions[0]);
console.log(quizApp.scoreCalculator());


// $(document).ready(function(){


// });