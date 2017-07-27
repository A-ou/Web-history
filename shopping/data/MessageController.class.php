<?php 
class MessageController{
	public function store(){
		$data=$_POST;
		$data['date']=time();
		$result=M()->insert_sql('message',$data);
		if($result){
			echo  '{"code":"1","msg":"发布成功"}';		
		}else{
			echo  '{"code":"0","msg":"发布失败"}';
		}
	}
	public function show(){
		$result=M()->select_sql("SELECT * FROM message");
		foreach ($result as $key => $value) {
			$result[$key]['date']=date("Y-m-d h:i:s",$value['date']);
		}
		$result=json_encode($result);//将数组转换成组json符串
		echo $result;
	}
	public function delete(){
		$id=$_POST['id'];
		$result=M()->delete_sql('message',$id);
		if($result){
			echo '{"code":"1","msg":"删除成功"}';
		}else{
			echo '{"code":"0","msg":"删除失败"}';
		}
	}
	public function get_old_data(){
		$id=$_POST['mid'];
		$result=M()->select_sql("SELECT * FROM message WHERE id='{$id}'");
		$result=json_encode($result);//将数组转换成组json符串
		echo $result;
	}
	public function update(){
		$id=$_GET['mid'];
		$data=$_POST;
		$data['date']=time();
		$result=M()->update_sql('message',$data,$id);
		if($result){
			echo '{"code":"1","msg":"修改成功"}';
		}else{
			echo '{"code":"0","msg":"修改失败"}';
		}
	}
}