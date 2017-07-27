var ctrl=angular.module('shop.controller',['shop.service']);
ctrl.controller('startController',function($scope,ShopService){
	function Goods(){
		ShopService.getGoods($scope.all).success(function(goodes){
			// console.log(goodes)
			$scope.goodes=goodes;
		})
	}
	Goods();
	// 加载更多
	$scope.start=0;
	$scope.getM=[];
	$scope.gengduo='查看更多';
	$scope.getmore=function (){
		$scope.start+=2;
		if ($scope.start>=$scope.total) {
				$scope.gengduo='没有了';
				$scope.getMore=null;
				return false;
			}else{
				getGoodsBypage();
				
			}
	}
	function getGoodsBypage(){
		ShopService.getGoodsList($scope.start).success(function(getM){
			// console.log(getM[0].num)
			$scope.total=getM[0].num;
			$scope.getM=$scope.getM.concat(getM);
		})
	}
	getGoodsBypage();
	// 轮播图
	var lb=document.getElementById('lb');
	var inner=document.getElementById('inner');
	var imgs=inner.getElementsByTagName('img');
	var list=document.getElementById('list');
	var lis=list.getElementsByTagName('li')
	var timmer,timmer1,x=0;;
	function move(){
		var step=0;//从0步开始
		var Maxstep=20;//一张图需要30步走完
		var start=lb.scrollLeft;//起始位置
		var end=imgs[0].clientWidth*x;
		var everystep=(end-start)/Maxstep;
		timmer=setInterval(function(){
			step++;
			if (step>=Maxstep) {
				clearInterval(timmer);
			};
			start=start+everystep;
			lb.scrollLeft=start;
		},30)
	}
	function automove(){
		timmer1=setInterval(function(){
			clearInterval(timmer)
			x++;
			if (x>=3) {
				lb.scrollLeft=0;
				x=0;
			}
			move()
			listle()
		},5000)
	}
	automove()
	function listle(){
		for (var i = 0; i < lis.length; i++) {
			lis[i].style.background='#ffffff';
			if (i==x) {
				lis[x].style.background='red'
			}else{
				lis[i].style.background='#ffffff'
			}
		};
	}
})
// 分类控制器
ctrl.controller('classifyController',function($scope,ShopService){
	function Goods(){
		ShopService.getGoods($scope.start).success(function(goodes){
			// console.log(goodes)
			$scope.goodes=goodes;
		})
	}
	Goods();
	$('.left_l li').click(function() {
		var i=$(this).index();
		$(this).addClass('hov').siblings().removeClass('hov');
		$('.right_r').eq(i).show().siblings().hide();
	});
})
// 详情页控制器
ctrl.controller('detailsController',function($scope,$routeParams,ShopService,$rootScope){
	document.body.scrollTop=0;
	$rootScope.goodsID=$routeParams.id;
	localStorage.setItem("ID",$rootScope.goodsID);
	ShopService.getGoodsByid($routeParams.id).success(function(data_goods){
		$scope.data_goods=data_goods;
	});
	// $scope.carArr=[];
	 $scope.adCar =function(h){
		if (localStorage.getItem("ZH")) {
			$scope.yh=localStorage.getItem("ZH");
			ShopService.addShopCarByid($scope.yh,$rootScope.goodsID).success(function(carid){
				console.log(carid)
			});
			localStorage.setItem("hrf",h);
			window.location.href = '#/'+localStorage.getItem("hrf");
		}else{
			localStorage.setItem("hrf",h)
			window.location.href = '#/login';
		}
	};

})
//下订单页面
ctrl.controller('orderController',function($scope,ShopService,$rootScope,$routeParams){
	console.log(localStorage.getItem("ID"))
	ShopService.getGoodsByid(localStorage.getItem("ID")).success(function(data_goods){
		$scope.data_goods=data_goods;
	})
})
// 发现页面控制器
ctrl.controller('discoverController',function($scope,ShopService){
	ShopService.getGoods().success(function(dsc){
		$scope.dsc=dsc;
	});
	
})
ctrl.controller('listController',function($scope,ShopService){
	ShopService.getGoods().success(function(dsc){
		// console.log(dsc);
		$scope.dsc=dsc;
	})
})
//个人中心页面控制器
ctrl.controller('personController',function($scope){
	
})
//登录页面控制器
ctrl.controller('loginController',function($scope){
	// $('.login-top').eq(0).parents().css({
	// 	height: '100%',
	// 	overflow: 'hidden'
	// });
	//登录
	$('#login').click(function(){
		if ($('#user').val()==''||$('#pasd').val()=='') {
			alert('用户名和密码都不能为空')
			return false
		}else{
			$.ajax({
				url: './data/index.php?c=Login&a=login',
				type: 'post',
				data:{'user':$('#user').val(), 'pass':$('#pasd').val()},
				dataType: 'json',
				success:function(d){
					alert(d.msg);
					localStorage.setItem("ZH",$('#user').val());
					// console.log(localStorage.getItem("hrf"))
					window.location.href='#/'+localStorage.getItem("hrf")
				}
			})
		}
		return false;
	});
	//注册
	$('#sign').click(function(){
		if ($('#user').val()==''||$('#pasd').val()=='') {
			alert('用户名和密码都不能为空');
			return false;
		}else{
			$.ajax({
				url: './data/index.php?c=Login&a=sign',
				type: 'post',
				dataType: 'json',
				data: {'user':$('#user').val(), 'pass':$('#pasd').val()},
				success:function(d){
					alert(d.msg)
				}
			})
		}
		return false;
	});
})
// 购物车控制器
ctrl.controller('shopcarController',function($scope){
	
})
