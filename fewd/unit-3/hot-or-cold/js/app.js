// Variables
var secretNumber;

// Functions
function newGame() {
  secretNumber = Math.floor(Math.random() * 100);
}

function gameOver() {
  var endGame = confirm( "You have won the game!" );
  if ( endGame == true ) {
    newGame();
    $(feedbackContainer).text('Make your Guess!');
  }
}

function userGuessFeedback( num ) {
  var feedbackContainer = $('#feedback');
  if ( num == secretNumber ) {
    gameOver();
  } else if ( num < secretNumber && (secretNumber - num) <= 5 ) {
    $(feedbackContainer).text('You are hot!');
  } else if ( num < secretNumber && (secretNumber - num) <= 15 ) {
      $(feedbackContainer).text("You're low, but warming up!");
  } else if ( num < secretNumber && (secretNumber - num) > 15 ) {
      $(feedbackContainer).text('You guess was too low');
  } else if ( num > secretNumber && (num - secretNumber) <= 5 ) {
    $(feedbackContainer).text('You are hot!');
  } else if ( num > secretNumber && (num - secretNumber) <= 15 ) {
      $(feedbackContainer).text("You're high, but warming up!");
  } else if ( num > secretNumber && (num - secretNumber) > 15 ) {
      $(feedbackContainer).text('You guess was too high');
  }
}

function guess() {
  // Value of guess from input
  var guessedNumber = $('#userGuess').val();

  // userGuessFeedback
  if ( guessedNumber <= 100 ) {
    userGuessFeedback( guessedNumber );
  } else {
    alert("Enter a number less than 100");
  }

  // Append guess to guesslist
  $('#guessList').append("<li>" + guessedNumber + "</li>");

  // Add 1 to guess count
  var quessCount = parseInt($('#count').text());
  quessCount++;
  $('#count').text(quessCount);

  // Empty guess input field
  $('#userGuess').val('');
}


$(document).ready(function(){

  /*--- Start New Game on Document Ready ---*/
  newGame();
  console.log( secretNumber );

  /*--- Start New Game on click ---*/
  $(".new").click( function(e) {
    newGame();
    return false;
  });


	/*--- Display information modal box ---*/
	$(".what").click( function() {
  	$(".overlay").fadeIn(1000);
	});


	/*--- Hide information modal box ---*/
	$("a.close").click( function() {
		$(".overlay").fadeOut(1000);
	});


  /*--- Submit Guess ---*/
  $('form').submit( function() {
    guess();
    return false;
  });

});





// Initially, you shouldn’t worry about telling users if they’re getting “hotter” or “colder” relative to their previous guess. Instead, you can use absolute values. For instance, you might decide that if a user is 50 or further away from the secret number, they are told they are “Ice cold”, if they are between 30 and 50 they are “cold”, if they are between 20 and 30 they are warm, between 10 and 20 hot, and between 1 and 10 “very hot”. We’ll leave it up to you to choose what the ranges are and what feedback you provide.


// You’ll need to ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set, so you won’t have to worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input). However, you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.