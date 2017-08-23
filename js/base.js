$(function(){
	$("#header-text, #down-arrow").click(function(){
		$("body").animate({"scrollTop": $('#aboutme').offset().top}, 800);
	});

	$("#projects li").click(function(){
		if(!$("#projects-navigation").hasClass("left-column")){
			$("#projects .content-container").hide();
			$("#projects-navigation").addClass("left-column");
			$("#"+this.id.replace("-li", "-info")).show();
			$("#projects .content-container").show(400);
			$(this).addClass("selected");
		} else{
			$("#projects li").removeClass("selected");
			$(this).addClass("selected");
			$(".right-column div").hide();
			$("#"+this.id.replace("-li", "-info")).show();
		}
	})
})