<?php
/**
* 登录控制器
*/
class LoginController{
	public function sign(){//注册方法
		$data=$_POST;//获取前端传送过来的数据
		$result=M()->select_sql("SELECT * FROM user WHERE user='{$data['user']}'");//接收到前端数据之后在数据库中进行查询，
		if(!empty($result)){//查看是否有重复的用户名
			echo '{"code":"0","msg":"该用户名已经被占用"}';//返回值用单引号,中间内容使用双引号
			exit;
		}else{
			$pass=$this->md($data['pass']);
			$data['pass']=$pass;
			$row=M()->insert_sql('user',$data);
			if($row){
				echo '{"code":"1","msg":"注册成功"}';
				exit;
			}else{
				echo '{"code":"0","msg":"注册失败"}';
				exit;
			}
		}
	}
	public function login(){
		$data=$_POST;
		$result=M()->select_sql("SELECT * FROM user WHERE user='{$data['user']}'");
		if(empty($result)){
			echo '{"code":"0","msg":"该用户名不存在"}';
		}else{
			$new_pass=$this->md($data['pass']);
			$old_pass=M()->select_sql("SELECT pass FROM user WHERE user='{$data['user']}'");
			$old_pass=current($old_pass);
			if($new_pass===$old_pass['pass']){
				echo '{"code":"1","msg":"登录成功"}';
			}else{
				echo '{"code":"0","msg":"密码错误"}';
			}
		}
	}
	public function md($data){//针对密码加密函数
		$data=md5(md5($data)."html");
		return $data;
	}
}