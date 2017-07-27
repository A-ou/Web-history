var service=angular.module('shop.service',[]);
service.factory('ShopService',function($http){
	return{
		getGoods:function(){
			return $http.get(
				'data/getgoods.php',
				{params:{}});
		},
		getGoodsList:function(start){
			return $http.get(
				'data/getgoods-more.php',
				{params:{'start':start}});
		},
		getGoodsByid:function(id){
			return $http.get(
				'data/getgoods-byid.php',
				{params:{'dno':id}});
		},
		addShopCarByid:function(yh,aid){
			return $http.get(
				'data/index.php?c=Please&a=add',
				{params:{'yh':yh,'aid':aid}});
			console.log(yh);
			console.log(aid);
		}
	}
})