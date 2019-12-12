		// jQuery选择器

		$("img.prev1").click(function(){

			$(".imgList1 ul").animate({"left":3},500,function(){
				$(this).append($(this).find("li:first"));
				$(this).css("left",0);
			});

		});

		$("img.next1").click(function(){

			autoPlay();

		});

		var cleartime=setInterval(autoPlay,8000);
		//鼠标放上去，停止播入
		$("img.next1,img.prev1").hover(function(){
			clearInterval(cleartime);
		},function(){
			cleartime=setInterval(autoPlay,3000);
		});

		function autoPlay(){

			$(".imgList1 ul").prepend($(".imgList1 ul li:last"));
			$(".imgList1 ul").css("left",3);
			$(".imgList1 ul").animate({"left":0},500);
		}
		// 	function autoPlay(){

		// 	$(".PartR ul").prepend($(".imgList1 ul li:last"));
		// 	$(".PartR ul").css("left",-280);
		// 	$(".PartR ul").animate({"left":0},500);
		// }