$(function(){
	var wh = $(window).height();
	$("section").height(wh);

	$(window).on("resize", function(e){
		var wh = $(window).height();
		$("section").height(wh);		
	});

	$(document).on("mousemove", function(e){
		var x = e.pageX;
		var y = e.pageY;

		//벚꽃 섹션
		$(".p11").css({"right":20-(x/30), "bottom":20-(y/30)});
		$(".p12").css({"right":130-(x/20), "bottom":-40-(y/20)});
		$(".p13").css({"right":60-(x/20), "top":180-(y/20)});

		//두번째 섹션
		$(".p21").css({"right":-180-(x/30), "bottom":-480-(y/30)});
		$(".p22").css({"right":130+(x/50), "bottom":-40-(y/50)});

		//세번째 섹션
		$(".p31").css({"right":280-(x/30), "bottom":30-(y/30)});
		$(".p32").css({"right":110+(x/20), "bottom":-270+(y/20)});
		$(".p33").css({"right":-70+(x/20), "bottom":-130+(y/20)});

		//네번째 섹션
		$(".p41").css({"right":20-(x/30), "bottom":-120-(y/30)});
		$(".p42").css({"right":0+(x/30), "bottom":-180+(y/20)});

	});

	$("#menu li").on("click", function(e){
		e.preventDefault();

		var wh = $(window).height();

		var i = $(this).index();

		var target = i * wh;

		$("html, body").stop().animate({"scrollTop":target}, 1500);
	});

	var scrolling = false;
	$("section").on("mousewheel", function(e, delta){
		if(scrolling){
			return;
		}
		
		if(delta > 0) {
			if($(this).prev().length == 0) {
				return;
			}
			scrolling = true;
			var prev = $(this).prev().offset().top;
			$("html, body").stop().animate({"scrollTop":prev},1000, "easeOutBounce", function(){
					scrolling = false;
			});
		}else if(delta < 0){
			if($(this).next().length <= 0) {
				return;
			}
			scrolling = true;
			var next = $(this).next().offset().top;
			$("html, body").stop().animate({"scrollTop":next}, 1000, "easeOutBounce", function(){
					scrolling = false;
				});
		}
	});

	$(window).on("scroll", function(e){
		var wh = $(window).height(); //윈도우의 높이
		var sc = $(window).scrollTop(); //현재 스크롤의 위치

		$("#menu li").removeClass();

		if(sc >= 0 && sc < wh){
			$("#menu li").eq(0).addClass("on");
		}else if(sc < 2 * wh){
			$("#menu li").eq(1).addClass("on");
		}else if(sc < 3* wh - 20){
			$("#menu li").eq(2).addClass("on");
		}else {
			$("#menu li").eq(3).addClass("on");
		}
	});
});
//커스텀 아이징
//사진구하기 힘들걸