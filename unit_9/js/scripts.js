// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "hello" );
    $( "#menu_button" ).click(function() {
  		$("nav").slideToggle();
	});
});