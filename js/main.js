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

// NAVBAR ANIMATIONS
var rgbInvScroll = (255 - Math.round(($(document).scrollTop()/$(window).height())*255));
if($(window).scrollTop() > $(window).height()){
  $('.navbar').css({'background-color':'rgba(255,255,255,0.9)'}); 
  $('.nav-text').css({'color':'black'});
}
else{
  $('.navbar').css({'background-color':'rgba(255,255,255,0)'});
  // $('.nav-text').css({'color':'rgb('+rgbInvScroll+','+rgbInvScroll+','+rgbInvScroll+')'});
}
$(window).scroll(function(){
	var rgbInvScroll = (255 - Math.round(($(document).scrollTop()/$(window).height())*255));
  if($(window).scrollTop() > $(window).height()){
    $('.navbar').css({'background-color':'rgba(255,255,255,0.9)'});
    $('.nav-text').css({'color':'black'});
  }
  else{
    $('.navbar').css({'background-color':'rgba(255,255,255,'+($(document).scrollTop()/$(window).height())*0.9+')'});
    // $('.nav-text').css({'color':'rgb('+rgbInvScroll+','+rgbInvScroll+','+rgbInvScroll+')'});
  }
});