$(function(){
	$("#header-text, #down-arrow").click(function(){
		$("body").animate({"scrollTop": $('#intro').offset().top}, 800);
	});
})