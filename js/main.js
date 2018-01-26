// slide to id
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

// switch language
if(localStorage.lang == null){
  localStorage.lang = "en";
  $('[lang="es"]').hide();
} else if (localStorage.lang == "en"){
  $('[lang="es"]').hide();
} else {
  $('[lang="en"]').hide();
}

$('.switch-lang').click(function() {
  $('[lang="es"]').toggle();
  $('[lang="en"]').toggle();
  if(localStorage.lang == "en"){
    localStorage.setItem("lang","es");
    console.log("switch to spanish");
  } else {
    localStorage.setItem("lang","en");
    console.log("switch to english");
  }
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