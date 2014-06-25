for ( count = 1; count <= 100; count++ ) {

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