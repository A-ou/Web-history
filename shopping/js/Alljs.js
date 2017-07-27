// Index.js
function scale1(ev) {
		var HTML=document.getElementsByTagName('html')[0];
		var Ww=document.documentElement.clientWidth;
		var scale=Ww/750;
		HTML.style.fontSize=scale*100+'px';
	}
scale1();
var shop_car=document.getElementById('shop_car');
// shop_car.onclick=function(){
// 	window.open('shopcar.html','_self')
// }

// 