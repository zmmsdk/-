// ===========================================================================================================
// 项目初始化
  // 封装id选择器
  function $id(id) {
    return document.getElementById(id)
  }
  // 调用接口
  //var 变量名 =  $id('cc')
  // 封装class选择器
  function $class(uname) {
    return document.getElementsByClassName(uname)
  }
  // 调用接口
  //var 变量名 =  $class('name')
  // 封装标签名
  function $tagName(tagname) {
    return document.getElementsByTagName(tagname)
  }
  // 调用接口
  //var 变量名 =  $tagName('tagName')
  // 封装css选择器
  function $(querySelector) {
    return document.querySelector(querySelector)
  }
  // 调用接口
  //var 变量名 = $('querySelector')
  // 封装css多类名选择器
  function $All(querySelectorAll) {
    return document.querySelectorAll(querySelectorAll)
  }
//   调用接口
  // var 变量名 =  $All('querySelectorAll')
// ################################################################
// 全局变量区
var index ;
// 
var flag ;
var result ;

var xbtn ;


var len1 ;
var len2 ;
// 功能1、点击大按钮全选小按钮
// 当大按钮发生改变，会影响到小按钮，如果大按钮选中，小按钮全选
// 如果大按钮没选中，小按钮全部不选择
// 先得获取大按钮是否选择，再去判断小按钮是否需要选择
var checkall = $All('.checkall');
// var checkall1 = $class('checkall');

// var checkall_1 = $('.checkall');
var jcheckbox = $All('.j-checkbox');

// console.log(jcheckbox);
// console.log(checkall);
// 小计的变量 都别抢
var increment = $class('increment') ;
var decrement = $All('.decrement') ;
var itxt = $All('.itxt') ;



for(var i = 0 ;i<checkall.length;i++){
    // 设置下标
    checkall[i].index = i ;
   
    // 添加事件
    // console.log( checkall[i]);
    checkall[i].addEventListener('click', function () {
        // console.log('测试成功');      
        // 获取大按钮选中状态
        flag = this.checked ;    
        // 获取那个没被选中的大按钮 把它选中    
        // 设置大按钮选中状态 直接把flag的值设置给大按钮
          // 选中大按钮
          // 伪数组中元素添加属性需要遍历添加
          for(i = 0 ; i<checkall.length  ;i++){
            checkall[i].checked = flag ;
          }
        //   checkall[i].checked = flag ;
        for(i = 0 ; i<jcheckbox.length  ;i++){
                jcheckbox[i].checked = flag ;
                // console.log('测试成功');
                //获取小按钮的选中状态
                result = this.checked ;
                console.log( result);
                // ############################################################################
                // 功能2背景颜色区
                if( result == true){
                    // console.log(jcheckbox[i].parentNode.parentNode);
                    jcheckbox[i].parentNode.parentNode.style.background = '#fff4e8';  
                }
                else if(result == false ){
                    // console.log('123');
                    jcheckbox[i].parentNode.parentNode.style.background = '#fff';  
                } 
                // bug2三元表达式优化
                // var a = jcheckbox[i].parentNode.parentNode.style.background = '#fff4e8'; 
                // var b = jcheckbox[i].parentNode.parentNode.style.background = '#fff';
                // result ? a : b ;         
            }        
    });
}


// ################################################################
// 功能2、小按钮选中  当前小按钮父元素的父元素的背景颜色要改变
// 每一个小按钮发生改变都有可能让大按钮选择
for(var i = 0 ; i <jcheckbox.length;i++){
    // console.log(jcheckbox[i]);
    jcheckbox[i].addEventListener('click',function(){
      
        // console.log('123');
        //判断小按钮的选中状态
               
         xbtn = this.checked ;
          // console.log(this);
        //  console.log(xbtn);
         // 功能2背景颜色区
        //  bug this 指向变了  这里是当前事件源
         if( xbtn  == true){
            // console.log(this);
            this.parentNode.parentNode.style.background = '#fff4e8'; 
           
        }
        else if(xbtn  == false ){
            // console.log('123');
            this.parentNode.parentNode.style.background = '#fff';  
        }  
    // ###################################################################################
    // 功能3小按钮全选  大按钮也要全部选中
         len1 = jcheckbox.length;
		// 选中的个数
         len2 = $All('.j-checkbox:checked').length;
         console.log(len2);        
         if( len1  == len2){
            // console.log('123');
        for(var i = 0 ;i<checkall.length;i++){
            checkall[i].checked = true ;
        }           
        }
        else if(len1  !== len2 ){
            // console.log('456');         
            for(var i = 0 ;i<checkall.length;i++){
                checkall[i].checked = false  ;
            }
        }
    });  
}
// #########################################################################
// 功能4、点击数量增加
// 当点击的时候，我们获取value值，让这个value加1，之后再设置回这个元素
var price ;
var xprice ;
var zhi ;
for(var i = 0 ; i<increment.length;i++){
  // 设置下标
    // console.log( this);

   
    
  // increment[i].index = i ;
    increment[i].addEventListener('click' , function(){
        // console.log('123');
        // console.log(this.previousElementSibling);
        
        
        // 获取value属性
      var val = this.previousElementSibling.value ;
     console.log(val);
     
      // 让value属性的值+1 
      val++;
      // 设置回去
      // this是当前a元素  要找的是input的值
      console.log(val);
      this.previousElementSibling.value = val ;
      console.log(val);
      
      // 取消禁用
      this.disabled  = false;


    // 求小计：获取单价，求的小计，把小计放入元素中
	// 小计 = 单价 * 数量;
	// 小计 = 单价 * val;
    // 获取单价
    // console.log(this.parentNode.parentNode.previousElementSibling.innerText);
     price = this.parentNode.parentNode.previousElementSibling.innerText ;
    
    // 截取字符串
		price = price.substring(1);
		// 求小计
		zhi = price * val;
		// 设置内容
        // 保留几位有效数字
        // console.log(zhi);
        // 获取小计
        console.log(zhi);
        
        xprice = this.parentNode.parentNode.nextElementSibling ;
        console.log(xprice);
        xprice.innerText = '￥' + zhi.toFixed(2);
        getSum()
        
        // this.parentNode.parentNode.nextElementSibling.innerText = '￥' + zhi.toFixed(2);
   });
}

for(var i = 0 ; i<decrement.length;i++){
decrement[i].addEventListener('click' , function(){
    // 获取value属性
  var val = this.nextElementSibling.value;

// 判断
if (val == 1) {
    return;
}
  // 让value属性的值+1 
  val--;

  // 设置回去
  this.nextElementSibling.value = val ;

  // 取消禁用
  decrement.disabled  = true;


   // 求小计：获取单价，求的小计，把小计放入元素中
	// 小计 = 单价 * 数量;
	// 小计 = 单价 * val;
    // 获取单价
    // console.log(this.parentNode.parentNode.previousElementSibling.innerText);
    price = this.parentNode.parentNode.previousElementSibling.innerText ;
    
    // 截取字符串
		price = price.substring(1);
		// 求小计
		zhi = price * val;
		// 设置内容
        // 保留几位有效数字
        // console.log(zhi);
        // 获取小计
        xprice = this.parentNode.parentNode.nextElementSibling ;
        console.log(xprice);
        xprice.innerText = '￥' + zhi.toFixed(2);
        getSum()
});
}
var val ;
// #########################################################################
// 功能5、直接输入数量
// 当itxt发生改变的时候，我们也要计算小计
// 小计 = 单价* 数量
for(var i = 0 ; i<itxt.length;i++){
itxt[i].addEventListener('input',function(){
    // console.log('123');
     // 获取value属性
      val = this.value;
      console.log(val);


      // 获取单价
    // console.log(this.parentNode.parentNode.previousElementSibling.innerText);
     price = this.parentNode.parentNode.previousElementSibling.innerText ;
    
     // 截取字符串
         price = price.substring(1);
         // 求小计
         zhi = price * val;
         // 设置内容
         // 保留几位有效数字
         // console.log(zhi);
         // 获取小计
         xprice = this.parentNode.parentNode.nextElementSibling ;
         console.log(xprice);
         xprice.innerText = '￥' + zhi.toFixed(2);  
         getSum() 
})
}
// #########################################################################
// 功能6、求总件数和总价格
// 因为多次要求总和，我们最好的做法是封装一个函数

// 1.计算总件数
getSum()
function getSum(){
  // flag是大按钮的选中状态
  // 这里要找的是小按钮的选中状态
 if(xbtn  = true){
  var sum = 0 ;
  for(var i = 0 ; i< itxt.length ;i++){
      // 获取val值
         // 获取value属性
         var val = itxt[i].value;
        //  console.log(val);
         
      sum += parseInt(val) ;
  }
  // 把sum结果放入页面
  var jianshu = $('.amount-sum em');
  // console.log(jianshu.innerText);
  
  jianshu.innerText = sum ;
  
 }
// console.log(jianshu.innerText);
// 2.计算总钱数
var psum = $All('.p-sum');
// console.log(psum);

var sum = 0 ;
for(var i = 0 ; i< psum.length ;i++){
    // 获取val值
       // 获取value属性
       var val = psum[i].innerText;
      //  console.log(val);
       
       // 截取字符串
		val = val.substring(1);
    sum += parseFloat(val) ;
}
// 把sum结果放入页面
var pricesum = $('.price-sum');
// console.log(jianshu.innerText);
pricesum.style.color = '#E2231A';
pricesum.style.fontWeight = 700 ;
pricesum.style.fontSize = '20px';
pricesum.innerText = '￥' + sum.toFixed(2);
// console.log(pricesum.innerText);
}


// ########################################################################################
// 功能7删除功能
// 删除的是cart-item这个元素
    // 点击删除
  var paction = $All('.p-action a');
  // console.log(paction);
  var cartlist = $('.cart-item-list');
  // console.log(cartlist);
  
  for(var i = 0 ; i<  paction.length ;i++){
    paction[i].addEventListener('click',function(){
        // console.log(this.parentNode.parentNode);
        // console.log(123);
      // 使用父元素去删除它的子元素
      if(flag = true){
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        getSum()
      }
    })
  }
// 删除选中的元素
  var removebatch = $('.remove-batch');
  // console.log(removebatch);
  // 动态获取获取选中的元素selector不能动态获取元素
  var jcheckboxs = $All('.j-checkbox')
  // console.log(jcheckboxs);
  
  removebatch.addEventListener('click',function(){
      // console.log(111);
      for(var i = 0 ;i<jcheckboxs.length ;i++){
        // console.log(12);
        // 选中的元素
        // console.log(jcheckboxs[i]);
        // console.log(jcheckboxs[i].parentNode);
        jcheckboxs[i].parentNode.parentNode.parentNode.removeChild(jcheckboxs[i].parentNode.parentNode); 
        console.log(jcheckboxs)
        getSum();      
      }     
  });

  // 清理购物车
  var clearall = $('.clear-all');
  console.log(clearall);
  var cartitem = $All('.cart-item')
  console.log(cartitem);
  
  clearall.addEventListener('click',function(){
    // console.log(1234);
    // 全部删除
    for(var i = 0 ;i<cartitem.length ;i++){
     console.log(cartitem[i].parentNode);
     
      cartitem[i].parentNode.removeChild(cartitem[i]);  
      var all = document.querySelectorAll('.cart-item')
      console.log(all);
      getSum();      
    }  
  });
  // var all = document.querySelectorAll('.cart-item')
  // console.log(all);
  














