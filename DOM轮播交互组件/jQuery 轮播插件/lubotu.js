
// 批量修改内容可使用查找替换 也可以寻找错误
// 这是JQuery的语法，$表示JQuery对象，可以有好几种用法。
// 比如传递选择器字符串、页面对象等，如果直接传函数体进去，
// 表示当页面加载完毕时执行这个函数
 /*$() jQuery对象搭建器*/
;$(function(){
// 	$.fn是指jquery的命名空间，加上fn上的方法及属性，会对jquery实例每一个有效。 
// 如扩展$.fn.abc(),即$.fn.abc()是对jquery扩展了一个abc方法,那么后面你的每一个jquery实例都可以引用这个方法了. 
// 那么你可以这样子：$("#div").abc(); 

// jQuery为开发插件提拱了两个方法，分别是： 

// jQuery.extend(object);为扩展jQuery类本身.为类添加新的方法。 
// jQuery.fn.extend(object);给jQuery对象添加方法。 
	
	$.fn.lunbo=function(options){
		
		// var defaults={

		// }
	
		// //通过覆盖来传参数
		// var options=$.extend(defaults,options);
		
		return this.each(function(){//遍历匹配的元素，此处的this表示为jquery对象，而不是dom对象
            // css属性转js变量开始
			var _lunbo=jQuery('.lunbo');

			var _box=jQuery('.lunbo_box');

			var _this=jQuery(this); // 

			var lunboHei=_box.height();

			var Over='mouseover';

			var Out='mouseout';

			var Click='click';

			var Li="li";

			var _cirBox='.cir_box';

			var cirOn='cir_on';

			var _cirOn='.cir_on';

			var cirlen=_box.children(Li).length; //圆点的数量  图片的数量

			var lunboTime=2000; //轮播时间

			var switchTime=400;//图片切换时间
			
			

		//根据图片的数量来生成圆点

        
        function cir(){
                // js无序列表开始
				_lunbo.append('<ul class="cir_box"></ul>');
				// js无序列表结束

				var cir_box=jQuery('.cir_box');
				// for (变量 = 开始值;变量 <= 结束值;变量 = 变量 + 步进值) {需执行的代码 }
				//语句 1 在循环（代码块）开始前执行i=0语句 
				// 2 定义运行循环（代码块）的条件i<cirlen;语句 
				// 3 在循环（代码块）已被执行之后执行i++
                // for循环开始
				for(var i=0; i<cirlen;i++){
					// js无序列表项循环体开始

					cir_box.append('<li style="" value="'+i+'"></li>');
					// js无序列表项循环体结束
				}
				// for循环结束

				var cir_dss=cir_box.width();

				cir_box.css({

					left:'50%',

					marginLeft:-cir_dss/2,

					bottom:'10%' 

				});

				cir_box.children(Li).eq(0).addClass(cirOn);

			}
			// 调用cir()函数

			cir();

		//生成左右按钮

			function Btn(){
				// 按钮生成开始

				// _lubo变量绑定对应css属性.lubo对应后边div的css属性
				// append函数是向string _lubo的后面追加字符或字符串
				// 按钮div盒子开始lubo_btn是其css属性名称

				_lunbo.append('<div class="lunbo_btn"></div>');
				// 按钮div盒子结束

				var _btn=jQuery('.lunbo_btn');

				_btn.append('<div class="left_btn"><</div><div class="right_btn">></div>');
                // 按钮变量初始化开始   
                // jQuery功能：把css属性中保存的数据赋值给同名变量带入js进行运算
				var leftBtn=jQuery('.left_btn');

				var rightBtn=jQuery('.right_btn');
				// 按钮变量初始化结束

			//点击左面按钮

				leftBtn.bind(Click,function(){

				var cir_box=jQuery(_cirBox);

			 	var onLen=jQuery(_cirOn).val();	

				_box.children(Li).eq(onLen).stop(false,false).animate({

					opacity:0

				},switchTime);

				if(onLen==0){

			 		onLen=cirlen;

			 	}

				_box.children(Li).eq(onLen-1).stop(false,false).animate({

					opacity:1

				 },switchTime);
				
				cir_box.children(Li).eq(onLen-1).addClass(cirOn).siblings().removeClass(cirOn);

				})

			//点击右面按钮

				rightBtn.bind(Click,function(){

				var cir_box=jQuery(_cirBox);

			 	var onLen=jQuery(_cirOn).val();	

				_box.children(Li).eq(onLen).stop(false,false).animate({

					opacity:0

				},switchTime);

				if(onLen==cirlen-1){

				 		onLen=-1;

				 	}

				_box.children(Li).eq(onLen+1).stop(false,false).animate({

					opacity:1

				 },switchTime);
				
				cir_box.children(Li).eq(onLen+1).addClass(cirOn).siblings().removeClass(cirOn);

				})
			}
			// 调用Btn()函数

			Btn();

		//定时器

			 int=setInterval(clock,lunboTime);

			 function clock(){

			 	var cir_box=jQuery(_cirBox);

			 	var onLen=jQuery(_cirOn).val();	

				_box.children(Li).eq(onLen).stop(false,false).animate({

					opacity:0

				},switchTime);

				if(onLen==cirlen-1){

				 		onLen=-1;

				 	}

				_box.children(Li).eq(onLen+1).stop(false,false).animate({

					opacity:1

				 },switchTime);
				
				cir_box.children(Li).eq(onLen+1).addClass(cirOn).siblings().removeClass(cirOn);
			 	
			 }

		// 鼠标在图片上 关闭定时器
			
			_lunbo.bind(Over,function(){

				clearTimeout(int);

			});

			_lunbo.bind(Out,function(){

				int=setInterval(clock,lunboTime);

			});

		//鼠标划过圆点 切换图片

			jQuery(_cirBox).children(Li).bind(Over,function(){

				var inde = jQuery(this).index();

				jQuery(this).addClass(cirOn).siblings().removeClass(cirOn);

				_box.children(Li).stop(false,false).animate({

					opacity:0

				},switchTime);

				_box.children(Li).eq(inde).stop(false,false).animate({

					opacity:1

				},switchTime);

			});


		});

	}
	
})(jQuery);


/*调用*/

// <script type="text/javascript">

// $(function(){

//     $(".lunbo").lunbo({

//     });

// })

// </script>



// <style type="text/css">
//   *{ margin:0; padding:0; }
//   img{ display: block; border:none;}
//   ul,li{ list-style: none;}
  /*轮播属性开始*/
  // .lunbo{ width: 80%; min-width:1000px;clear: both; position: relative; height:368px;margin: auto;}
  /*轮播属性结束*/
  /*轮播无序列表属性开始*/
  // .lunbo_box{ position: relative; width: 100%; height:368px; }
  /*轮播无序列表属性结束*/
  /*轮播无序列表项属性开始*/
  // .lunbo_box li{ float: left;position: absolute; top: 0; left: 0; width: 100%; height:368px; opacity: 0;filter:alpha(opacity=0);}
  // .lunbo_box li a{ display: block;width: 100%;  height: 100%;}

  // .lunbo_box li img{ width: 100%; height: 368px;}
  /*轮播无序列表项属性结束*/

  /*圆点盒子属性开始*/
  /*圆点z-index正负值决定着网页多层元素的显示*/
  // .cir_box{ overflow: hidden; position: absolute; z-index: 100;}
  /*圆点盒子属性结束*/
  /*圆点列表项属性开始*/
  // .cir_box li{ float: left; width: 30px; height: 5px; margin:0 5px; cursor: pointer; background: #fff; opacity: 0.8;filter:alpha(opacity=80);}
  /*圆点列表项属性结束*/
  /*规定不透明度级别。从 0.0 （完全透明）到 1.0（完全不透明）。*/

  /*圆点点击背景开始*/
  // .cir_on{ background: #000 !important;}
  /*圆点点击背景结束*/

  /*按钮盒子属性开始*/
  // .lunbo_btn{ position: absolute; width: 100%; top: 140px;z-index: 100;}
  /*按钮盒子属性结束*/
  /*按钮内容属性开始*/
  // .left_btn, .right_btn{ width: 30px; height: 80px; background: #000;  opacity: 0.8;filter:alpha(opacity=80); cursor: pointer; color: #fff; line-height: 80px; font-size: 30px; text-align: center; padding:10px;
  // -webkit-user-select:none;
  // -moz-user-select:none;
  // -o-user-select:none;
  // user-select:none;user-select:none;}
  /*按钮内容属性结束*/

  /*user-select:none;设置或检索不允许用户选中文本*/
  /*按钮盒子属性结束*/
//   .left_btn{ float: left;}
//   .right_btn{ float: right;}
// </style>

/*html*/
// <!-- 轮播开始 -->
// <div class="lunbo">
//   <!-- 轮播无序列表开始 -->
//   <ul class="lunbo_box">
//     <!-- 轮播无序列表项开始 -->
//     <li style=" opacity: 1;filter:alpha(opacity=100);"><a href="" style="background:url(1.jpeg) center top no-repeat"></a></li><!-- no-repeat不平铺 center使背景图在页面缩小时显示正常不偏移-->
//     <li><a href="" style="background:url(2.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(3.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(4.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(5.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(1.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(2.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(3.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(4.jpeg) center top no-repeat"></a></li>
//     <li><a href="" style="background:url(5.jpeg) center top no-repeat"></a></li>
//     <!-- 轮播无序列表项结束  -->
//   </ul>
//   <!-- 轮播无序列表结束  -->
// </div>
// <!-- 轮播结束 -->



