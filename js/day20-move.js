
// 透明度： 缓冲切换
// startMove 支持: top, left, width, opacity 

// startMove： 实现同时改变多个属性
// 参数：
//    oBox  物体
//    oAttr 需要修改的属性 和 目标值，是一个对象，例如：
//         {
//			"left": 500,
//			"top": 500, 
//			"width": 500
//		   }
//         代表： 同时改变 left\top\width 的值
function startMove(oBox, oAttr, fn)
{
	clearInterval(oBox.timer);
	
	oBox.timer = setInterval(function() {
		
		var flag = false; // 用于判断所有属性都到达目标位置
		
		// 遍历所有要改变的属性
		for (var attr in oAttr) {
			// attr 当前需要改变的属性，例如：left\top
			// oAttr[attr] 代表属性值，相当于是物体移动目标位置
			var iTarget = oAttr[attr];
			
			// 动画改变当前属性值
			// 1、得到当前值
			var current = getStyle(oBox, attr);
	
			if (attr == "opacity") {
				//      0.1 ==> 10   统一成百分比的形式
				current *= 100;
				//      0.115 ==> 11.5  ==> 12  统一整数
				current = Math.round(current);
			} else {
				current = parseInt(current);
			}
			
			// 2、计算速度
			var speed = (iTarget - current) / 6;
			speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
			
			// 3、判断
			if (current == iTarget) {
				// 说明【当前属性】 到达目标位置，跳过更新语句
				// 继续下一个属性的更新
				continue;
				
				// 什么时候终止定时器？
				//   【答】所有属性都到达目标位值
				// 怎么判断 所有属性都到达目标位值？
				//     1, 定义 flag 为 false
				//     2, 只要有一个没完成，就设置 flag 为 true
				//     3, 在循环结束后，判断 flag 的值
				//           如果为 false，说明全部都完成了
				
				//clearInterval(oBox.timer);
				
				// 到达目标位置，调用回调函数，来创建新的定时器
				//fn && fn();
				
				//return ;
			} else {
				// 这里是当前属性没有到达目的位置
				flag = true;
			}
			
			// 4、更新位置
			if (attr == "opacity") {
				oBox.style.opacity = (current + speed) / 100;
				oBox.style.filter = "alpha(opacity="+(current + speed)+")"; 
			} else {
				oBox.style[attr] = current + speed +"px"; 
			}
		}
		
		if (flag == false) {
			// 说明全部属性都完成了
			clearInterval(oBox.timer);
			
			fn && fn();
			
			return ; // 可写可不写，因为下面没有代码了
		}

	}, 100);
	
}


// 获取 oBox 中样式中 属性名为 attr 的值
function getStyle(oBox, attr) {
	if (window.getComputedStyle) {
		// 非IE中
		return getComputedStyle(oBox)[attr];
	} else {
		// IE 
		return oBox.currentStyle[attr];
	}
}