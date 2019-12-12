// 1. 准备工作：获取元素
// 1.1 左侧盒子
var leftBox = document.querySelector('.fdj .leftBox');
// 1.2 小黄盒子
var tool = document.querySelector('.fdj .tool');
// 1.3 右侧盒子
var rightBox = document.querySelector('.fdj .rightBox');
// 1.4 右侧盒子的大图
var bigImg = document.querySelector('.fdj .rightBox img');



// 2. 功能1：鼠标进入左侧盒子，显示小黄和右侧盒子
// 2.1 给leftBox注册onmouseover
leftBox.onmouseover = function () { 
  // 2.2 设置小黄和右侧盒子的样式display → block
  tool.style.display = 'block';
  rightBox.style.display = 'block';
};


// 3. 功能2：鼠标离开左侧盒子，隐藏小黄和右侧盒子
// 2.1 给leftBox注册onmouseout
leftBox.onmouseout = function () { 
  // 2.2 设置小黄和右侧盒子的样式display → none
  tool.style.display = 'none';
  rightBox.style.display = 'none';
};

// 4. 功能3：鼠标在左侧盒子内移动时，小黄和右侧盒子中的图片按照比例关系移动
// 目标1：鼠标在移动的过程中计算小黄盒子的位置
// 目标2: 把小黄的位置一2倍并且以相反的方向赋值给右侧盒子中大图的left 和 top
// 4.1 给leftBox注册onmousemove事件
leftBox.onmousemove = function (e) { 
  // console.log('移动了~~~')
  // 4.2 通过事件对象中的鼠标位置，计算出小黄的位置
  var x = e.pageX - this.offsetLeft -tool.offsetWidth/2 ;
  var y = e.pageY - this.offsetTop-tool.offsetHeight/2 ;
  console.log(x, y)
  
  // 限制：
  if (x < 0) {
    x = 0;
  } else if (x > leftBox.offsetWidth - tool.offsetWidth) {
    x = leftBox.offsetWidth - tool.offsetWidth;
  }

  if (y < 0) {
    y = 0;
  }else if (y > leftBox.offsetHeight - tool.offsetHeight) {
    y = leftBox.offsetHeight - tool.offsetHeight;
  }


  // 4.3 设置小黄的位置
  tool.style.left = x + 'px';
  tool.style.top = y + 'px';

  // 4.4 设置右侧盒子中大图的left 和 top
  bigImg.style.left = -2 * x + 'px';
  bigImg.style.top = -2 * y + 'px';
};









