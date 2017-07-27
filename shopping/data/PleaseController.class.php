<?php 
class PleaseController{
	public function add(){
		$id=$_GET['aid'];
		$data=$_GET['yh'];
		$arr['goodsID']=$_GET['aid'];
		foreach ($arr as $key => $value) {
			print_r($value);
			die;
		};
		$result=M()->update_sql('user',$arr,$data);
	}
}