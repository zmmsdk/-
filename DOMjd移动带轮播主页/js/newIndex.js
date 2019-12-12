
// 左滑下标加1，右滑下标减1【前面移动除去的距离，下标*banner宽度】
// 自定义下标：从1开始的


// 获取元素
var banner = document.querySelector('.banner');
var content = document.querySelector('.content');
var lis = document.querySelectorAll('.banner li');
var width = banner.offsetWidth;
var index = 1;
var startx;
// 判断左右滑动，再去执行其他
// 获取按下坐标值
banner.addEventListener('touchstart',function (e) {
	startx = e.touches[0].clientX;
	window.clearInterval(dsq);
});


// 获取松开的值
banner.addEventListener('touchend',function (e) {
	lis[index-1].className = '';
	var endx = e.changedTouches[0].clientX;

	// 判断
	if (startx < endx) {
		console.log('you');
		index--;
	} else if (startx > endx) {
		console.log('zuo');
		index++;
	}


	// 计算移动距离
	var moveVal = -index * width;
	// 移动
	content.style.transform = 'translateX(' + moveVal + 'px)';
	content.style.transition = '0.2s';
	
	dsq = window.setInterval(function () {
		lis[index-1].className = '';
		index++;
		// 计算移动距离
		var moveVal = -index * width;
		// 移动
		content.style.transform = 'translateX(' + moveVal + 'px)';
		content.style.transition = '0.2s';

	},1000);
	
});

content.addEventListener('transitionend', function () {
	if (index > 4) {
		index = 1;
	}
	if (index < 1) {
		index = 4;
	}
	var moveVal = -index * width;
	content.style.transform = 'translateX(' + moveVal + 'px)';
	content.style.transition = 'none';
	// 修改liclassName
	lis[index-1].className = 'active';
});


// 如果把浏览器最小化，定时器依旧会执行，但是过度效果不存在
var dsq = window.setInterval(function () {
	if (index > 4) {
		index = 1;
	}
	lis[index-1].className = '';
	index++;
	// 计算移动距离
	var moveVal = -index * width;
	// 移动
	content.style.transform = 'translateX(' + moveVal + 'px)';
	content.style.transition = '0.2s';

},1000);



