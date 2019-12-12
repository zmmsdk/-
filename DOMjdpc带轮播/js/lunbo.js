// 轮播图的JS代码都写到这个里面
// 功能：
// 1、点击右按钮换图
// 2、点击左按钮移动图片
// 3、点击小点也要换图
// 4、无缝轮播
// 5、默认也要自动轮播图
// 6、鼠标进入停止自动轮播，鼠标离开继续自动轮播
// 
// 
/*
	点击右按钮的时候，让下标加1，通过下标 * 大盒子宽度 知道要往前移动多少距离

 */

// 获取元素：
var bannerCenter = document.getElementById('bannerCenter');
var content = document.querySelector('.content');
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');
var lis = document.querySelectorAll('.controls li');

var width = bannerCenter.offsetWidth;
// 直接定义一个下标
var index = 0;

// 点击右按钮换图
btnRight.onclick = function () {
	lis[index].className = '';
	// 下标加1
	index++;
	if (index > 3) {
		index = 3;
	}
	// 计算出要移动的距离
	var moveVal = -index * width;
	// 要让元素移动
	moveElement(content, moveVal, 50);
	// 添加类名
	lis[index].className = 'active';

}
// 点击左按钮换图
btnLeft.onclick = function () {
	lis[index].className = '';
	// 下标减1
	index--;
	if (index < 0) {
		index = 0;
	}
	// 计算移动距离【负的3个730个负的2个720】
	var moveVal = -index * width;
	// 移动元素
	moveElement(content, moveVal, 50);
	// 添加类名
	lis[index].className = 'active';

}