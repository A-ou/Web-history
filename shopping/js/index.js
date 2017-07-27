var app = angular.module('shop',['shop.controller','ngRoute']);
var ctrl=angular.module('shop.controller',['shop.service']);
app.config(function($routeProvider){
	$routeProvider.when('/',{//首页
		templateUrl:'tpl/shouye.html',
		controller:'startController'
	}).when('/classify',{//分类
		templateUrl:'tpl/classify.html',
		controller:'classifyController'
	}).when('/detail/:id',{//商品详情
		templateUrl:'tpl/details.html',
		controller:'detailsController'
	}).when('/discover',{//发现
		templateUrl:'tpl/discover.html',
		controller:'discoverController'
	}).otherwise({
		templateUrl:'tpl/shouye.html',
		controller:'startController'
	}).when('/list',{//下拉式分类
		templateUrl:'tpl/list.html',
		controller:'listController'
	}).when('/person',{//个人中心
		templateUrl:'tpl/person.html',
		controller:'personController'
	}).when('/login',{//登录页面
		templateUrl:'tpl/login.html',
		controller:'loginController'
	}).when('/order',{//订单页面
		templateUrl:'tpl/order.html',
		controller:'orderController'
	}).when('/shopcar',{//购物车页面
		templateUrl:'tpl/shopcar.html',
		controller:'shopcarController'
	})
})
.run(function($rootScope) {  
    $rootScope.backToPrevious = function() {
            window.history.back();
           // window.location.reload();
        };
    $rootScope.login =function(h){
		if (localStorage.getItem("ZH")) {
			localStorage.setItem("hrf",h);
			window.location.href = '#/'+localStorage.getItem("hrf");
		}else{
			localStorage.setItem("hrf",h)
			window.location.href = '#/login';
		}
	};
});

