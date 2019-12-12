// 1. 获取元素
// 1.1 获取一组li
var lis = document.querySelectorAll('li');
// 1.2 获取一组类名为item的div
var items = document.querySelectorAll('.item');

// 1.3 获取类名为slide的div
var slide = document.querySelector('.slide');

// 2. 循环遍历给每一个li注册onmouseenter，并且每一个li添加一个index表示索引
for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].onmouseenter = function () {
    // 2.1 循环遍历把所有的li的类名设置为'',把所有的item的display设置为none
    for (var j = 0; j < lis.length; j++) {
      lis[j].className = '';
      items[j].style.display = 'none';
    }
    // 2.2 让当前的li突出显示（加类名active）
    this.className = 'active';
    // 2.3 获取到当前的li的编号（加的索引）
    var num = this.index;
    // 2.4 通过编号找到对应的item项设置display为block
    items[num].style.display = 'block';
  };
}


// 3. 给类名为slide的div鼠标离开事件onmouseleave
slide.onmouseleave = function () { 
  // 3.1 循环遍历把所有的li的类名设置为'',把所有的item的display设置为none
  for (var j = 0; j < lis.length; j++) {
    lis[j].className = '';
    items[j].style.display = 'none';
  }
};
