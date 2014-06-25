function fizzBuzz(num) {
  for ( count = 1; count <= num; count++ ) {
    if ( count % 3 == 0 && count % 5 == 0 ) {
      $('body').append("fizz buzz");
    } else if ( count % 3 == 0 ) {
      $('body').append("fizz");
    } else if ( count % 5 == 0 ) {
      $('body').append("buzz");
    } else {
      $('body').append(count);
    }
    $('body').append('<br>');
  }
}


var number = prompt("Please pick a number, any number you'd like!");
number = Math.floor(number);

if ( isNaN(number) ) {
  alert('Sorry that is not a number.');
  location.reload();
} else {
  fizzBuzz( Math.floor( number ) );
}