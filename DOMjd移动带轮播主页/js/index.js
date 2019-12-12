var banner = document.querySelector('.banner');
var content = document.querySelector('.content');
var lis = document.querySelectorAll('.banner li');
var index = 1;
var width = banner.offsetWidth;
var startx;
banner.addEventListener('touchstart',function (e) {

	startx = e.touches[0].clientX;
	window.clearInterval(dsq);

});

banner.addEventListener('touchend',function (e) {
	lis[index-1].className = '';
	var endx = e.changedTouches[0].clientX;

	if (startx < endx) {
		// console.log('有');
		index--;
	} else if (startx > endx) {
		console.log('zuo');
		index++;
	}
	var moveVal = -index * width;
	content.style.transform = 'translateX(' + moveVal + 'px)';
	content.style.transition = '0.2s';

	dsq = window.setInterval(function () {
	lis[index-1].className = '';
	index++;
	var moveVal = -index * width;
	content.style.transform = 'translateX(' + moveVal + 'px)';
	content.style.transition = '0.2s';

},1000);

});

content.addEventListener('transitionend',function () {

	if (index == 5) {
		index = 1;
	}
	if (index == 0) {
		index = 4;
	}
	var moveVal = -index * width;
	content.style.transform = 'translateX(' + moveVal + 'px)';
	content.style.transition = 'none';
	lis[index-1].className = 'active';


});

var dsq = window.setInterval(function () {
	lis[index-1].className = '';
	index++;
	var moveVal = -index * width;
	content.style.transform = 'translateX(' + moveVal + 'px)';
	content.style.transition = '0.2s';

},1000);