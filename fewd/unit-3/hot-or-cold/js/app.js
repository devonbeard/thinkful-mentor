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