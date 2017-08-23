$(function(){
	var wasMobile = window.innerWidth < 960;
	var mobile = window.innerWidth < 960;

	$("#header-text, #down-arrow").click(function(){
		$("body").animate({"scrollTop": $('#aboutme').offset().top}, 800);
	});

	$("#projects li").click(function(){
		if(mobile){
			if($(this).hasClass("selected")){
				$("#"+this.id.replace("-li", "-info")).slideUp();
				$(this).removeClass("selected")
			} else {
				$(".project-info").hide();
				$("#"+this.id.replace("-li", "-info")).insertAfter($(this)).slideDown(400);
				$("#projects li").removeClass("selected");
				$(this).addClass("selected");
			}
		} else {
			if(!$("#projects-navigation").hasClass("left-column")){
				$("#projects .content-container").hide();
				$("#projects-navigation").addClass("left-column");
				$("#"+this.id.replace("-li", "-info")).show();
				$("#projects .content-container").show(400);
				$(this).addClass("selected");
			} else{
				$("#projects li").removeClass("selected");
				$(this).addClass("selected");
				$(".project-info").hide();
				$("#"+this.id.replace("-li", "-info")).show();
			}
		}
	});

	$(window).resize(function(){
		wasMobile = mobile;
		mobile = window.innerWidth < 960;
		if(mobile && !wasMobile){
			$("#projects-navigation").removeClass("left-column");
		} else if (!mobile && wasMobile){
			$(".project-info").hide();
			$("#projects li").removeClass("selected");
			$(".right-column").append($(".project-info"));
		}
	})
})