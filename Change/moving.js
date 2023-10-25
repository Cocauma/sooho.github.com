$(function(){
	//문서가 전부 로딩되면 실행해!
	$(".btnMenu").on("click", function(){
		$(this).fadeOut();
		$("nav").addClass("on");
		$("section").addClass("on");
	});

	$("#gnb li").on("click", function(){
		$(".btnMenu").fadeIn();
		$("nav").removeClass("on");
		$("section").removeClass("on");

		var i = $(this).index();
		$("section > div").removeClass("on");
		$("section > div").eq(i).addClass("on");
	});
});