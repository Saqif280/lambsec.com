// slide to id
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

// switch language
$('[lang="es"]').hide();

$('.switch-lang').click(function() {
  $('[lang="es"]').toggle();
  $('[lang="en"]').toggle();
});