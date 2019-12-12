// 1. 获取一组li（按钮5个）
var lis = document.querySelectorAll('li');
// 2. 获取一组类名为item的div（显示项5个）
var items = document.querySelectorAll('.item');
// 3. 循环遍历li，给每一个li发一个牌号（给每一个li添加一个index属性表示某一个li索引），并且要给每一个li注册点击事件
for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].onclick = function () {
    // 3.1 ① 点击的当前的li突出显示(设置类名active)    ② 点击的li对应的div要显示（通过当前点击li的index找到对应ddiv，设置样式display为block）
    // 3.2 把所有的li类名设置为'',并且把所有的类名为item的div的样式 设置为隐藏
    for (var j = 0; j < lis.length; j++) {
      lis[j].className = '';
      items[j].style.display = 'none';
    }
    // 3.3 设置当前点击的li突出显示
    this.className = 'active';
    // 3.4 获取当前点击的li的索引
    var num = this.index;
    // 3.5 找到对应的item项，然后设置为显示
    items[num].style.display = 'block';
  };
}


