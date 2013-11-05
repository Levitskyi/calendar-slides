$(document).ready(function(){


//Begin some logic for button and slides left and right
var count = 0;
var countLi = $('ul#slider li').size();
$('.on_but_next').hide(); 
$('#nav_button_prev').click(function(){
	count--;
	$('#div_for_img').animate({left:"+=240px"},500);
	if(count === 0){
		$('.on_but_prev').show();
	}
	if(count <= 8){
		$('.on_but_next').hide();
	}	
});
$('#nav_button_next').click(function() {
		count++;
		$('#div_for_img').animate({left:"-=240px"},500);
		if(count === 8){
			$('.on_but_next').show();
		}
		if(count !== 0){
		$('.on_but_prev').hide();
		}
 });



});//end ready













