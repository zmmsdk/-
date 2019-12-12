// 轮播图JS代码


/*
	bannerCenter：轮播图div:720
	content:内容项：2880px，img：720px
	左btn-left右btn-right按钮
	ul，li：小点
 */

/*
	1、点击右按钮实现换图效果
	2、点击左按钮实现换图效果
	3、点击小点实现换图效果
	4、点击左右按钮实现无缝滚动
	5、自动轮播效果
	6、鼠标进入停止自动轮播
	7、鼠标离开继续自动轮博
 */

/*
	点击右按钮，下标加1【左按钮减1】
	下标默认从0开始
	获取元素宽度
	移动的元素是content，移动的距离：下标*width
	先定义一个下标
 */

// 获取元素
var bannerCenter = document.getElementById('bannerCenter');
var content = document.querySelector('.content');
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');
var lis = document.querySelectorAll('.controls li');// lis = [li,li,li,li]
// 获取宽度
var width = bannerCenter.offsetWidth;
// 定义一个下标
var index = 0;



// 点击右按钮实现换图
btnRight.onclick = function () {
	if (index == 0) {
		content.style.left = 0 + 'px';
	}
	lis[index].className = '';
	// 下标加1
	index++;
	// if (index > 3) {
	// 	index = 3;
	// }
	// 计算移动的距离
	var moveVal = -index * width;
	// 调用动画移动元素
	moveElement(content, moveVal, 100);

	if (index == 4) {
		index =0;
	}
	// 修改li样式
	lis[index].className = 'active';
}


// 点击左按钮实现换图
btnLeft.onclick = function () {
	lis[index].className = '';
	// 下标减1
	index--;
	if (index < 0) {
		index = 3;
		content.style.left = -2880 + 'px';
	}
	// 计算出移动的距离
	var moveVal = -index * width;
	// 调用动画移动元素
	moveElement(content, moveVal, 100);
	// 修改li样式
	lis[index].className = 'active';
}

// 点击小点
for (var i = 0; i < lis.length; i++) {
	lis[i].newIndex = i;
	// 添加事件
	lis[i].onclick = function () {
		lis[index].className = '';
		// index改变
		index = this.newIndex;
		// 根据index计算出要移动的距离
		var moveVal = -index * width;
		// 调用动画移动元素
		moveElement(content, moveVal, 100);
		// 修改li样式
		lis[index].className = 'active';
	}
}

// 启动定时器完成自动轮播
var timer = window.setInterval(function () {

	// 给元素添加事件，相当于给元素对象添加方法
	// 对象.方法名();
	// 让右按钮调用其方法
	btnRight.onclick();

},1000);

// 鼠标进入停止自动轮播
bannerCenter.onmouseover = function () {

	window.clearInterval(timer);

}


// 鼠标离开继续自动轮播
bannerCenter.onmouseout = function () {

	timer = window.setInterval(function () {

		// 给元素添加事件，相当于给元素对象添加方法
		// 对象.方法名();
		// 让右按钮调用其方法
		btnRight.onclick();

	},1000);

}