// 1. 获取元素
// 1.1 轮播模块容器
var bannerCenter = document.querySelector('#bannerCenter');
// 1.2 轮播项容器
var content = document.querySelector('.banenr-center .content');
// 1.3 左侧按钮
var btnLeft = document.querySelector('.banenr-center .btn-left');
// 1.4 右侧按钮
var btnRight = document.querySelector('.banenr-center .btn-right');
// 1.5 一组小点按钮
var lis = document.querySelectorAll('.banenr-center li');

// 2. 定义一个变量index，表示当前显示的是哪一项。默认为0
var index = 0;

// 3. 获取代表轮播模块的容器的宽度→720
var width = bannerCenter.offsetWidth;

// 4.【功能1：点击右侧按钮实现轮播】
// 4.1 给右侧按钮注册点击事件
btnRight.onclick = function () {
  // 把之前对应的小点恢复默认样式
  lis[index].className = '';
  // 更改显示的索引
  index++;
  // 限制
  if (index > 3) {
    index = 3;
  }
  // 计算content运动的目标值
  var v = -index * width;
  // 动画
  move(content, v, 50);
  // 把更改后的小点设置为突出显示
  lis[index].className = 'active';
};
// 5.【功能2：点击左侧按钮实现轮播】
// 5.1 给左侧按钮注册onclick事件
btnLeft.onclick = function () { 
  // 把之前li恢复默认样式
  lis[index].className = '';
  // 更改index
  index--;
  // 限制
  if (index < 0) {
    index = 0;
  }
  // 运算目标值
  var v = -index * width;
  // 动画
  move(content, v, 50);
  // 把对应li切换为突出显示
  lis[index].className = 'active';
};

// 6.【功能3：点击小点点按钮实现轮播】
// 6.1 循环遍历每一个li，给每一个li添加一编号，给每一个li注册点击事件。
for (var i = 0; i < lis.length; i++) {
  // 给每一个li添加一编号
  lis[i].num = i;
  // 给每一个li注册点击事件。
  lis[i].onclick = function () { 
    // 更改上一个小点恢复默认样式
    lis[index].className = '';
    // 更改index
    index = this.num;
    // 计算目标值
    var v = -index * width;
    // 设置动画
    move(content, v, 50);
    // 更改对应的小点突出显示
    lis[index].className = 'active';
  };
}