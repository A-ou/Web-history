<?php 
class IndexController{
	public function index(){
		session_start();
		if (isset($_COOKIE['name'])) {
			echo '{"code":"1","msg":"您已登录"}';
		}else{
			echo '{"code":"0","msg":"请您先登录"}';
		}
	}
}
