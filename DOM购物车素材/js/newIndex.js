// 代码
// 入口函数
$(function () {
// ################################################################
// 1、点击全选
// 当大按钮发生改变，会影响到小按钮，如果大按钮选中，小按钮全选
// 如果大按钮没选中，小按钮全部不选择
// 先得获取大按钮是否选择，再去判断小按钮是否需要选择
	$('.checkall').change(function () {
		// 知道大按钮是否选择
		var flag = $(this).prop('checked');
		// 修改小按钮是否选择
		$('.j-checkbox,.checkall').prop('checked', flag);

		// 背景添加类名
		// 小按钮选择的话就要添加类名
		if (flag) {
			// 加背景
			$('.cart-item').addClass('check-cart-item');
		} else {
			// 删除背景
			$('.cart-item').removeClass('check-cart-item');
		}


		// $('.checkall').prop('checked',flag);
		// 判断
		// if (flag) {
		// 	// 小按钮选择
		// } else {
		// 	// 小按钮都不选择
		// }
	});
// ################################################################
// 2、小按钮全选
// 每一个小按钮发生改变都有可能让大按钮选择
	$('.j-checkbox').change(function () {
		// 方法2：
		// 我们只要知道小按钮有几个，再知道被选中的小按钮有几个
		// 之后判断小按钮的个数和被选择的小按钮的个数是否相同
		// 如果相同说明全选了，否则不全选
		// 小按钮个数
		var len1 = $('.j-checkbox').length;
		// 选中的个数
		var len2 = $('.j-checkbox:checked').length;
		// 修改大按钮的checked
		$('.checkall').prop('checked', len1 == len2);
		// 背景
		// 如果当前小按钮选择，就要给对应的cart-item添加类名
		if ( $(this).prop('checked') ) {//当前小按钮选择
			$(this).parents('.cart-item').addClass('check-cart-item');
		} else {
			$(this).parents('.cart-item').removeClass('check-cart-item');
		}


		// 判断
		// if (len1 == len2) {
		// 	$('.checkall').prop('checked',true);
		// } else {
		// 	$('.checkall').prop('checked',false);
		// }
		// 方法1：
		// if(都选择){大按钮选择}else{大按钮不选择}
	});
// #########################################################################
// 3、点击数量增加
// 当点击的时候，我们获取value值，让这个value加1，之后再设置回这个元素
	$('.increment').click(function () {
		// 获取value值
		var val = $(this).siblings('.itxt').val();
		// 加1
		val++;
		// 设置回去
		$(this).siblings('.itxt').val(val);

		// 求小计：获取单价，求的小计，把小计放入元素中
		// 小计 = 单价 * 数量;
		// 小计 = 单价 * val;
		// 获取单价
		var price = $(this).parent().parent().siblings('.p-price').html();
		// 截取字符串
		price = price.substring(1);
		// 求小计
		var zhi = price * val;
		// 设置内容
		// 保留几位有效数字
		// n.toFixed(2)
		$(this).parent().parent().siblings('.p-sum').html('￥' + zhi.toFixed(2));
		// 计算总和
		getSum();

	});

// #########################################################################
// 4、点击数量减少
// 当点击的时候，我们获取value值，让这个value减1，之后再设置回这个元素
	$('.decrement').click(function () {
		// 获取value值
		var val = $(this).siblings('.itxt').val();
		// 判断
		if (val == 1) {
			return;
		}
		// 加1
		val--;
		// 设置回去
		$(this).siblings('.itxt').val(val);

		// 求小计
		// 小计 = 单价 * 数量;
		// 小计 = 单价 * val;
		// 获取单价
		var price = $(this).parent().parent().siblings('.p-price').html();
		// 截取字符串
		price = price.substring(1);
		// 求小计
		var zhi = price * val;
		// 设置内容
		// 保留几位有效数字
		// n.toFixed(2)
		$(this).parent().parent().siblings('.p-sum').html('￥' + zhi.toFixed(2));
		// 计算总和
		getSum();
	});
// #########################################################################
// 5、直接输入数量
// 当itxt发生改变的时候，我们也要计算小计
// 小计 = 单价* 数量
	$('.itxt').change(function () {
		// 获取数量
		var val = $(this).val();
		// 获取单价
		var price = $(this).parent().parent().siblings('.p-price').html();
		// 截取字符串
		price = price.substring(1);
		// 求小计
		var zhi = price * val;
		// 设置内容
		// 保留几位有效数字
		// n.toFixed(2)
		$(this).parent().parent().siblings('.p-sum').html('￥' + zhi.toFixed(2));
		// 计算总和
		getSum();
	});
// #########################################################################
// 6、求总件数和总价格
// 因为多次要求总和，我们最好的做法是封装一个函数
	getSum();
	function getSum () {
		// 定义一个变量保存总件数
		var count = 0;
		// 获取遍历
		$('.itxt').each(function (i, elm) {
			// elm==>是每一个.itxt
			// 获取value值
			var n = $(elm).val();
			// 累加
			count = count + parseInt(n);
		});
		// 我们计算出总件数，并且放到页面
		$('.amount-sum em').html(count);

		// 总价格
		var sum = 0;
		// 遍历
		$('.p-sum').each(function (i, m) {
			// 获取内容
			var k = $(m).html();
			// 截取字符串
			k = k.substring(1);
			// 求和
			sum = sum + parseFloat(k);
		});
		// 计算出总价格要放入到页面
		$('.price-sum em').html('￥' + sum.toFixed(2));
	}
// #########################################################################
// 7、删除功能，
// 删除的是cart-item这个元素
	// 点击删除
	$('.p-action a').click(function () {
		// 删除元素
		$(this).parents('.cart-item').remove();
		// 因为涉及到钱，我们要再求总和
		getSum();
	});

	// 点击删除选择商品
	$('.remove-batch').click(function () {
		// 查找元素并且删除
		$('.j-checkbox:checked').parents('.cart-item').remove();
		// 因为涉及到钱，我们要再求总和
		getSum();

	});

	// 清理购物车
	$('.clear-all').click(function () {
		// 全部删除
		$('.cart-item').remove();
		// 因为涉及到钱，我们要再求总和
		getSum();
	});



});

