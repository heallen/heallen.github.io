$(document).ready(function(){

	var activeContents = 'nameCircle'

	$('#navbar li, #nameCircle').click(function(){
		var newContents = $(this).attr('id')
		changeContents(newContents, activeContents);
		activeContents = newContents;
	});

	$('#nameCircle').click(function(){
		$('#navbar ul').slideToggle(500);
		$('#contents-nameCircle').html('Welcome!');
	});
});

function changeContents(newContents, activeContents){
	$('#contents-' + activeContents).fadeToggle(300, function(){
		$('#contents-' + newContents).fadeToggle(300);
	});
	$('#'+activeContents).removeClass('active');
	$('#'+newContents).addClass('active');
}