// 动画JS文件
// 如果以后那个页面要用动画，我们就引入这个js文件就可以

/*
	element：代表的是要移动的元素
	targetVal：要移动的是目标距离
	speed：每步移动的距离

 */

// 封装函数
var dsq;
function moveElement (element, targetVal, speed) {

	// 移动元素的代码
	// 多次点击，会启动多个定时器，多个定时器都会控制元素移动，一个元素就会乱节奏
	// 处理：我们要保证页面只能有一个定时器
	// 点击的时候，清除上一个定时器，再启动下一个定时器
	// 清除定时器
	window.clearInterval(dsq);

	// 点击的时候启动定时器
	dsq = window.setInterval(function () {

		// 获取左边距离
		var leftVal = element.offsetLeft;
		// 判断
		if (leftVal == targetVal) {
			window.clearInterval(dsq);
			// 函数遇到return会停止后面代码的执行，立刻停止函数的执行
			return;
		}

		// 当我们的targetVal和speed值不成倍数的话，就会出现来回抖动
		// 因为不够再移动一步，所以就会来回抖动
		// 如果够移动一步的话，我们就正常移动一步，但是如果不够移动一步，我们直接把目标距离设置给这个元素
		// 移动元素出现两种可能：一种正常，一种不够
		if (Math.abs(targetVal - leftVal) < speed) { // 不够移动
			element.style.left = targetVal + 'px';
		} else {
			// 加10
			if (targetVal > leftVal) {// 正方向
				leftVal = leftVal + speed;
			} else {
				leftVal = leftVal - speed;
			}
			
			// 赋值给元素
			element.style.left = leftVal + 'px';
		}

	}, 10);

}